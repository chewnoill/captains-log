import Index from "content/index.md";
import Page from "components/page";
import ReactDOMServer from "react-dom/server";

export default () => <Page child={ReactDOMServer.renderToString(<Index />)} />;
