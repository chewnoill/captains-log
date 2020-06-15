import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  theme: "default",
  startOnLoad: false,
});

export default ({ children }) => {
  const [content, setContent] = React.useState(null);
  React.useEffect(() => {
    mermaid.mermaidAPI.render("graphDiv", children, setContent);
  }, [children]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
