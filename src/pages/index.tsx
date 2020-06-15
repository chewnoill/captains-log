import Page from "components/page";
import { renderStaticMDX, hydrateMDX } from "utils/load-mdx";

type Props = { code: string; staticMDX: string; scope: any };

export default (props: Props) => {
  return <Page>{hydrateMDX(props)}</Page>
};

export async function getStaticProps({ params }) {
  const props = await renderStaticMDX("src/content/index.md");
  return { props };
}
