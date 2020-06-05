import React from 'react';
import Page from "components/page";
import ReactDOMServer from "react-dom/server";

type Props = { slug: string; page?: {title: string; body: string}; };

const loadBlog = (name: string) =>
  import(`content/blog/${name}.md`).catch((e) => ({ error: "error" }));

const BlogPost = ({ page }: Props) => {
  return (
    <Page child={page.body}/>
  );
};

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const blog = await loadBlog(slug);
  const { default: Body, ...args } = blog;
  const page = {
    ...args,
    body: Body && ReactDOMServer.renderToString(<Body />),
  };
  return { props: { page, slug } };
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
