import dynamic from "next/dynamic";
import * as args from "content/index.md";
import Page from "components/page";

dynamic(() => import("utils/netlify-login"), { ssr: false });

export default () => <Page {...args} body={args.default} />;
