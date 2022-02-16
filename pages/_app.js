import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/styles.css";
import Page from "../components/Page";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <Page>
      <Meta />
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
