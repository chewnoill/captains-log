import dynamic from "next/dynamic";

const Cms = dynamic(() => import("components/cms"), { ssr: false });

export default () => <Cms />;
