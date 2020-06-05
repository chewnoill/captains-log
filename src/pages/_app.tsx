import { ThemeProvider } from "ui";
import dynamic from "next/dynamic";

dynamic(() => import("utils/netlify-login"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
