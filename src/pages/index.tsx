import dynamic from "next/dynamic";
import Content, { title, cats } from "content/index.md";

dynamic(() => import("utils/netlify-login"), { ssr: false });

export default () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div>{title}</div>
      <ul>
        {cats.map((cat, k) => (
          <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
      <Content />
    </div>
  );
};
