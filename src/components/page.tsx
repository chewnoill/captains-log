import React from "react";
import { styled } from "ui";

export const StyledIndex = styled.div();

export interface Props {
  title: string;
  body: () => React.ReactNode;
}

export default ({ title, body: Body }: Props) => {
  return (
    <StyledIndex>
      <h1>{title}</h1>
      <Body />
    </StyledIndex>
  );
};
