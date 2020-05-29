import { styled } from "ui";

export const StyledIndex = styled.div();

export default ({ title, body: Body }: { title: string; body: any }) => {
  return (
    <StyledIndex>
      <h1>{title}</h1>
      <Body />
    </StyledIndex>
  );
};
