import React from "react";
import ReactGA from "react-ga";
import Footer from "./Footer";

if (process.env.NODE_ENV === "production") {
  if (typeof window !== "undefined") {
    ReactGA.initialize("UA-41524322-20");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

function Page(props) {
  return (
    <>
      <div className='main m-4'>{props.children}</div>
      <Footer />
    </>
  );
}

export default Page;
