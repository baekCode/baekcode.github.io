import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

interface Props {
  value: RichTextItemResponse[];
}

export const Text = ({ value }: Props) => {
  const [text] = value;
  const {
    annotations: { bold, code, color, italic, strikethrough, underline },
    plain_text,
    href,
  } = text;

  return (
    <PlainText
      isBold={bold}
      isCode={code}
      color={color}
      isItalic={italic}
      isStrikethrough={strikethrough}
      isUnderline={underline}
    >
      {href ? <a href={href}>plain_text</a> : plain_text}
    </PlainText>
  );
};

const PlainText = styled.span<{
  isBold: boolean;
  isCode: boolean;
  color: string;
  isItalic: boolean;
  isStrikethrough: boolean;
  isUnderline: boolean;
}>`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-style: ${({ isItalic }) => (isItalic ? 'italic' : 'normal')};

  ${({ isStrikethrough, isUnderline, isCode }) => {
    if (isStrikethrough) {
      return `text-decoration: line-through`;
    }
    if (isUnderline) {
      return `text-decoration: underline`;
    }
    if (isCode) {
      return `background-color: rgb(242, 242, 242);
              padding: 2px 4px;
              border-radius: 2px;`;
    }
  }}
`;
