import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  GetPageResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';

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

export type PageResult = Extract<GetPageResponse, { properties: Record<string, unknown> }>;
type PagePropertyValueMap = PageResult['properties'];
type PagePropertyValue = PagePropertyValueMap[string];
type PagePropertyValueType = PagePropertyValue['type'];
type PageExtractedPropertyValue<TType extends PagePropertyValueType> = Extract<PagePropertyValue, { type: TType }>;

export type PagePropertyValueTitle = PageExtractedPropertyValue<'title'>;
export type PagePropertyValueRichText = PageExtractedPropertyValue<'rich_text'>;
export type PagePropertyValueMultiSelect = PageExtractedPropertyValue<'multi_select'>;
export type PagePropertyValueStatus = PageExtractedPropertyValue<'status'>;
export type PagePropertyValueCreatedTime = PageExtractedPropertyValue<'created_time'>;

export type PageItem = PageResult & {
  properties: {
    title: PagePropertyValueTitle;
    createAt: PagePropertyValueCreatedTime;
    tags: PagePropertyValueMultiSelect;
    description: PagePropertyValueRichText;
    status: PagePropertyValueStatus;
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
  console.log('@@@getPage', response);
  return response as PageItem;
};

export const getBlocks = async (blockId: string) => {
  let content = [];
  let blocks = await notion.blocks.children.list({
    block_id: blockId,
  });

  content = [...blocks.results];

  while (blocks.has_more) {
    blocks = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: blocks.next_cursor ?? undefined,
    });

    content = [...content, ...blocks.results];
  }
  return content;
};
