import React from "react";
import { styled } from "ui";

export const StyledIndex = styled.div(
  ({ theme }) => `
margin:${theme.size[4]}px;

article {
  max-width:${theme.measures[1]};
}

blockquote {
  background: ${theme.colors["black-10"]};
  padding: ${theme.space[2]}px;
}

heading {
  font-weight: bold;
  font-size: ${theme.fontSizes[4]}px 
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
  title: string;
  body: () => React.ReactElement;
}

export default ({ title, body: Body }: Props) => {
  return (
    <StyledIndex>
      <h2>{title}</h2>
      <Body />
    </StyledIndex>
  );
};
