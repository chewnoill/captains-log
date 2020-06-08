import React from "react";
import { styled, Page } from "ui";

export const StyledIndex = styled(Page)(
  ({ theme }) => `
display: flex;
flex-direction: column;
align-items:center;

.title {
  text-align: center;
}

code {
  font-size: ${theme.fontSizes[2]}px;
  color: ${theme.colors["black-60"]};
  font-family: ${theme.typefaces.mono};
}

article {
  font-size: ${theme.fontSizes[3]}px;
  line-height: ${theme.lineHeights[1]};
  max-width:${theme.measures[2]};
}

section {
  max-width:${theme.measures[1]};
  background: ${theme.colors["black-10"]};
  padding: ${theme.space[5]}px;
  margin-bottom: ${theme.space[5]}px;
}

blockquote {
  background: ${theme.colors["black-10"]};
  padding: ${theme.space[2]}px;
}

asside {
  background: ${theme.colors["moon-gray"]};
  padding: ${theme.space[2]}px;
  margin: ${theme.space[3]}px;
  max-width: ${theme.size[7]}px;
  float: right;
}

heading {
  font-weight: bold;
  font-size: ${theme.fontSizes[4]}px;
  text-align: center;
}

.narrow-text {
  max-width:${theme.measures[0]};
}

.standard-text {
  max-width:${theme.measures[1]};
}

.wide-text {
  max-width:${theme.measures[2]};
}

`
);

export interface Props {
  child: string;
}

export default ({ child }: Props) => {
  return <StyledIndex dangerouslySetInnerHTML={{ __html: child }} />;
};
