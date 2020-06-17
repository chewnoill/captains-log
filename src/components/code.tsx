import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import dynamic from "next/dynamic";
const Mermaid = dynamic(() => import("components/mermaid"), { ssr: false });

interface Props {
  className?: string;
  children: string;
}

export default function Code({ className, children }: Props) {
  const lang = className ? className.split("-")[1] : "text";
  switch (lang) {
    case "mermaid":
      return <Mermaid>{children}</Mermaid>;
    default:
      return (
        <SyntaxHighlighter language={lang} style={docco}>
          {children}
        </SyntaxHighlighter>
      );
  }
}
