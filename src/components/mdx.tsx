import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
import Prompt from "components/prompt";

export default ({ children, scope }: { children: string; scope: any }) => (
  <MDXProvider components={{ Prompt }}>
    <MDX scope={scope}>{children}</MDX>
  </MDXProvider>
);
