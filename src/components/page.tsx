import React from "react";
import { styled, Page } from "ui";

export const StyledIndex = styled(Page)(
  ({ theme }) => ``
);

export interface Props {
  child: string;
}

export default ({ child }: Props) => {
  return <StyledIndex dangerouslySetInnerHTML={{ __html: child }} />;
};
