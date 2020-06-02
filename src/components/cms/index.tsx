import { useState, useEffect, useRef, Component } from "react";
import Head from "next/head";
import CMS from "netlify-cms-app";
import Page from "components/page";
import MDX from "@mdx-js/runtime";
import { ThemeProvider } from "ui";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";

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
  return (
    <CSSInjector>
      <ThemeProvider>
        <Page body={() => <MDX>{body}</MDX>} {...props} />
      </ThemeProvider>
    </CSSInjector>
  );
};

export default () => {
  CMS.init();
  CMS.registerPreviewTemplate("root", ThemedPage);
  CMS.registerPreviewTemplate("blog", ThemedPage);
  CMS.registerPreviewTemplate("index", ThemedPage);
  return (
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
};
