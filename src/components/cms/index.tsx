import { useState, useEffect, createElement, Suspense } from "react";
import Head from "next/head";
import CMS from "netlify-cms-app";
import Page from "components/page";
import MDX from "@mdx-js/runtime";
import { ThemeProvider } from "ui";


const ThemedPage = (props: any) => {
  const data = props.entry.getIn(["data"]).toJS();
  return (
    <ThemeProvider>
      <Page title={data.title} body={() => <MDX>{data.body}</MDX>} />
    </ThemeProvider>
  );
};

export default () => {
  CMS.init();
  CMS.registerPreviewTemplate("index", ThemedPage);
  return (
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
};
