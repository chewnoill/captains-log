import Page from "components/page";
import ReactDOMServer from "react-dom/server";
import { renderStaticMDX } from "utils/load-mdx";

export default ({ body }) => <Page child={body} />;

export async function getStaticProps({ params }) {
  const body = await renderStaticMDX("src/content/index.md");

  return { props: { body } };
}
