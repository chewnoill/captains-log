import { Component } from "react";
import Head from "next/head";
import CMS from "netlify-cms-app";
import Page from "components/page";
import MDX from "components/mdx";
import { ThemeProvider } from "ui";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import ReactDOMServer from "react-dom/server";

class CSSInjector extends Component {
  cache: any;
  constructor(p) {
    super(p);
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHead = iframe.contentDocument.head;
    this.cache = createCache({ container: iframeHead });
  }

  render() {
    return (
      <CacheProvider value={this.cache}>{this.props.children}</CacheProvider>
    );
  }
}

const ThemedPage = (args: any) => {
  const { body, ...props } = args.entry.getIn(["data"]).toJS();
  let child = null;
  try {
    child = ReactDOMServer.renderToString(<MDX scope={props}>{body}</MDX>);
  } catch (e) {
    child = "error";
  }
  return (
    <CSSInjector>
      <ThemeProvider>
        <Page {...props} child={child} />
      </ThemeProvider>
    </CSSInjector>
  );
};

export default () => {
  CMS.init();
  CMS.registerPreviewTemplate("root", ThemedPage);
  CMS.registerPreviewTemplate("blog", ThemedPage);
  CMS.registerPreviewTemplate("index", ThemedPage);
  return null;
};
