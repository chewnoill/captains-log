import dynamic from "next/dynamic";
import Content, { title } from "content/index.md";
import { styled } from "ui";

dynamic(() => import("utils/netlify-login"), { ssr: false });

const StyledIndex = styled.div();

export default () => {
  return (
    <StyledIndex>
      <h1>{title}</h1>
      <Content />
    </StyledIndex>
  );
};
