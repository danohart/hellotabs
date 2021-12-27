import React, { Component } from "react";
import ReactGA from "react-ga";
import Footer from "./Footer";

if (process.env.NODE_ENV === "production") {
  if (typeof window !== "undefined") {
    ReactGA.initialize(process.env.GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

class Page extends Component {
  render() {
    return (
      <>
        <div className='main'>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Page;
