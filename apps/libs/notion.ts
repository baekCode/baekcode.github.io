import { Client } from '@notionhq/client';
import { DatabaseObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export type PostResult = Extract<QueryDatabaseResponse['results'][number], { properties: Record<string, unknown> }>;
type PropertyValueMap = PostResult['properties'];
type PropertyValue = PropertyValueMap[string];
type PropertyValueType = PropertyValue['type'];
type ExtractedPropertyValue<TType extends PropertyValueType> = Extract<PropertyValue, { type: TType }>;

export type PropertyValueTitle = ExtractedPropertyValue<'title'>;
export type PropertyValueRichText = ExtractedPropertyValue<'rich_text'>;
export type PropertyValueMultiSelect = ExtractedPropertyValue<'multi_select'>;
export type PropertyValueStatus = ExtractedPropertyValue<'status'>;
export type PropertyValueCreatedTime = ExtractedPropertyValue<'created_time'>;

export type DatabaseItem = PostResult & {
  properties: {
    title: PropertyValueTitle;
    createAt: PropertyValueCreatedTime;
    tags: PropertyValueMultiSelect;
    description: PropertyValueRichText;
    status: PropertyValueStatus;
  };
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const databaseId = process.env.NOTION_DATABASE_ID ?? '';

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const retrieve = (await notion.databases.retrieve({
    database_id: databaseId,
  })) as DatabaseObjectResponse;

  const posts = response.results.map((item) => item as DatabaseItem);

  return { result: response.results, posts, title: retrieve.title[0].plain_text };
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const blocks = await notion.blocks.children.list({
    block_id: blockId,
  });
  return blocks;
};
