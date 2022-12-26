import React from "react";
import ReactGA from "react-ga";
import Footer from "./Footer";
import Meta from "./Meta";

if (process.env.NODE_ENV === "production") {
  if (typeof window !== "undefined") {
    ReactGA.initialize("UA-41524322-20");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function Page(props) {
  return (
    <>
      <Meta />
      <div className='main m-2'>{props.children}</div>
      <Footer />
    </>
  );
}

export default Page;
