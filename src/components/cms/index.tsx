import React from "react";
import { Component } from "react";
import CMS from "netlify-cms-app";
import Page from "components/page";
import { ThemeProvider } from "ui";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import { renderStaticMDXString } from "utils/load-mdx";

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
    child = renderStaticMDXString(body, props);
  } catch (e) {
    child = { staticMDX: "error" };
  }
  return (
    <CSSInjector>
      <ThemeProvider>
        <Page>
          {React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: child.staticMDX,
            },
          })}
        </Page>
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
