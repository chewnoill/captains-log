import Prompt from "components/prompt";
import Code from "components/code";
import Page from "components/page";
import remarkImages from "remark-images";
import remarkEmoji from "remark-emoji";
import { renderToString, hydrate } from "utils/mdx-hydra";

export const components = {
  Prompt,
  code: Code,
};


const loadFile = (name: string) => {
  const fs = require("fs");
  const fm = require("front-matter");
  return fm(fs.readFileSync(name).toString());
};

export const renderStaticMDXString = (content: string, attributes: object) => {
  return renderToString({
    source: content,
    components: components,
    remarkPlugins: [remarkImages, remarkEmoji],
    scope: attributes,
  });
};

export const renderStaticMDX = async (file: string) => {
  const blog = loadFile(file);
  const { body, attributes } = blog;
  return renderToString({
    source: body,
    components: components,
    remarkPlugins: [remarkImages, remarkEmoji],
    scope: { ...attributes, date: attributes.date.toString() },
  });
};

export const hydrateMDX = (props: {
  code: string;
  staticMDX: string;
  scope: object;
}) => hydrate({ ...props, components, Wrapper: Page });
