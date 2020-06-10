import React from "react";
import { styled, Page } from "ui";

export const StyledIndex = styled(Page)(
  ({ theme }) => `
display: flex;
flex-direction: column;
align-items:center;
margin: ${theme.size[4]}px;
width: calc(${theme.size[1]} - ${2*theme.size[4]}px);


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
  max-width: min(${theme.measures[2]},100%);
  margin: ${theme.space[3]}px;
}

section {
  max-width: min(${theme.measures[1]},100%);
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
  float: right;
}

heading {
  font-weight: bold;
  font-size: ${theme.fontSizes[4]}px;
  text-align: center;
}

.narrow-text {
  max-width:min(${theme.measures[0]}, 100%);
}

.standard-text {
  max-width:min(${theme.measures[1]}, 100%);
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
