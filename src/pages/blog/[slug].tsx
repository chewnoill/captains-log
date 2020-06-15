import React from "react";
import Page from "components/page";
import { renderStaticMDX, hydrateMDX } from "utils/load-mdx";
import { Result } from "utils/mdx-hydra";

type Props = Result & { slug: string };

const BlogPost = (props: Props) => {
  return <Page children={hydrateMDX(props)} />;
};

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const props = await renderStaticMDX(`src/content/blog/${slug}.md`);
  return { props: { ...props, slug } };
}

export async function getStaticPaths() {
  const fs = require("fs");
  const paths = fs
    .readdirSync("src/content/blog")
    .map((name) => ({ params: { slug: name.split(".")[0] } }));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
