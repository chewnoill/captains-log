import Page, { Props as PageProps } from "components/page";
import { useState, useEffect } from "react";

type Props = { slug: string; page?: PageProps; error?: any };

const loadBlog = (name: string) =>
  import(`content/blog/${name}.md`).catch((e) => ({ error: "error" }));

const LazyLoadBlog = ({ path }: { path: string }) => {
  const [{ loading, data, error }, setState] = useState({
    loading: false,
    data: null,
    error: false,
  });
  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    loadBlog(path)
      .then((data) => setState((prev) => ({ ...prev, data, error: false })))
      .catch(() => setState((prev) => ({ ...prev, error: true })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }, []);
  if (loading) <div>loading...</div>;
  if (error) <div>error</div>;
  if (!data) <div> 404 </div>;
  const C = data?.default || null;
  return C && <C />;
};

const BlogPost = ({ slug, page, error }: Props) => {
  if (error) {
    return <div> there was an error</div>;
  }

  return <Page {...page} body={() => <LazyLoadBlog path={slug} />} />;
};

BlogPost.getInitialProps = async ({ query }) => {
  const slug = query.slug;
  const blog = await loadBlog(slug);
  const { default: body, ...args } = blog;
  return { page: { ...args, body }, slug };
};

export default BlogPost;
