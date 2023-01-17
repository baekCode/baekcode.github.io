import { Text } from '~apps/@shared/components/text';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const renderBlock = (block: BlockObjectResponse) => {
  const { type, id } = block;

  let value;
  let src;
  let caption;

  switch (type) {
    case 'paragraph':
      value = block[type];
      return (
        <p>
          <Text value={value.rich_text} />
        </p>
      );
    case 'heading_1':
      value = block[type];
      return (
        <h1>
          <Text value={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      value = block[type];
      return (
        <h2>
          <Text value={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      value = block[type];
      return (
        <h3>
          <Text value={value.rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
      value = block[type];
      console.log('@@value', value, block, type);
      return (
        <li>
          <Text value={value.rich_text} />
        </li>
      );
    case 'numbered_list_item':
      value = block[type];
      console.log('@@value', value, block, type);
      return (
        <li>
          <Text value={value.rich_text} />
        </li>
      );
    case 'to_do':
      value = block[type];
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} /> <Text value={value.rich_text} />
          </label>
        </div>
      );
    case 'child_page':
      value = block[type];
      return <p>{value.title}</p>;
    case 'image':
      value = block[type];
      src = value.type === 'external' ? value.external.url : value.file.url;
      caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} />;
    case 'quote':
      value = block[type];
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case 'code':
      value = block[type];
      return (
        <pre>
          <code key={id}>{value.rich_text[0].plain_text}</code>
        </pre>
      );

    case 'bookmark':
      value = block[type];
      return (
        <a href={value.url} target="_brank">
          {value.url}
        </a>
      );
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`;
  }
};
