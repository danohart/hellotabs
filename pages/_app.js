import "../styles/globals.css";
import "../styles/styles.css";
import Page from "../components/Page";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Meta />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
