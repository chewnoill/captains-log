import React from "react";
import { transform } from "buble-jsx-only";
import mdx from "@mdx-js/mdx";
import { MDXProvider, mdx as createElement } from "@mdx-js/react";
import ReactDOMServer from "react-dom/server";

interface Props {
  scope?: object;
  components?: object;
  remarkPlugins?: Array<any>;
  rehypePlugins?: Array<any>;
  source: string;
}

export interface Result {
  code: string;
  staticMDX: string;
  scope: object;
}

const genReact = ({
  code,
  scope,
  components,
}: {
  code: string;
  scope: object;
  components: object;
}) => {
  const fullScope = {
    mdx: createElement,
    MDXProvider,
    components,
    ...scope,
  };

  const keys = Object.keys(fullScope);
  const values = Object.values(fullScope);

  const fn = new Function(
    "React",
    ...keys,
    `${code}
return React.createElement(MDXProvider, { components },
    React.createElement(MDXContent, {})
)
`
  );

  return fn(React, ...values);
};

export const renderToString = ({
  scope = {},
  components = {},
  remarkPlugins = [],
  rehypePlugins = [],
  source, // MDX Source
}: Props): Result => {
  // Compile MDX source into jsx components
  const jsx = mdx
    .sync(source, {
      remarkPlugins,
      rehypePlugins,
      skipExport: true,
    })
    .trim();

  // Run some additional babel transformations
  const code = transform(jsx, {
    objectAssign: "Object.assign",
  }).code;

  // We need to return the code used to generate the
  // static markup, we'll use this to hydrate the
  // component later.
  return {
    code,
    staticMDX: ReactDOMServer.renderToString(
      genReact({ code, components, scope })
    ),
    scope,
  };
};

interface HydrateProps {
  code: string;
  staticMDX: string;
  scope: object;
  components: object;
  Wrapper: any;
}

export const hydrate = ({
  code,
  staticMDX,
  components = {},
  scope = {},
}: HydrateProps) => {
  const hydrated = React.useRef(false);
  const [result, setResult] = React.useState(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: staticMDX,
      },
    })
  );
  typeof window !== "undefined" &&
    !hydrated.current &&
    window.requestIdleCallback(() => {
      const hydratedFn = genReact({ code, components, scope });

      hydrated.current = true;
      setResult(<div>{hydratedFn}</div>);
    });

  return React.useMemo(() => result, [code, result]);
};
