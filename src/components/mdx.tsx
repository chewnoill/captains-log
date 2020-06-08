import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
import Prompt from "components/prompt";
import Code from "components/code";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";

export default ({ children, scope }: { children: string; scope: any }) => (
  <MDXProvider components={{ Prompt, code: Code }}>
    <MDX remarkPlugins={[remarkImages, remarkEmoji]} scope={scope}>
      {children}
    </MDX>
  </MDXProvider>
);
