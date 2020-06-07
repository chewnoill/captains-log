import React from "react";
import ReactDOMServer from "react-dom/server";
import MDX from "components/mdx";

const loadFile = (name: string) => {
  const fs = require("fs");
  const fm = require("front-matter");
  return fm(fs.readFileSync(name).toString());
};

export const renderStaticMDX = (file: string) => {
  const blog = loadFile(file);
  const { body, attributes } = blog;
    return (
    ReactDOMServer.renderToString(<MDX scope={attributes}>{body}</MDX>)
  );
};
