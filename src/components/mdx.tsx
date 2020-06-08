import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
import Prompt from "components/prompt";
import Code from "components/code";

export default ({ children, scope }: { children: string; scope: any }) => (
  <MDXProvider components={{ Prompt, code: Code }}>
    <MDX scope={scope}>{children}</MDX>
  </MDXProvider>
);
