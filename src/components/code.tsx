import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface Props {
  className: string;
  children: string;
}

export default function Code({ className, children }: Props) {
  const lang = className?className.split("-")[1]:'text';
  return (
    <SyntaxHighlighter language={lang} style={docco}>
      {children}
    </SyntaxHighlighter>
  );
}
