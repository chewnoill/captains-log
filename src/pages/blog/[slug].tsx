import React from "react";
import Page from "components/page";
import { renderStaticMDX } from "utils/load-mdx";

type Props = { slug: string; child: string };

const BlogPost = ({ child }: Props) => {
  return <Page child={child} />;
};

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const child = await renderStaticMDX(`src/content/blog/${slug}.md`);
  return { props: { child, slug } };
}

export async function getStaticPaths() {
  const fs = require("fs");
  const paths = fs
    .readdirSync("src/content/blog")
    .map((name) => ({params: {slug: name.split(".")[0]}}));

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
