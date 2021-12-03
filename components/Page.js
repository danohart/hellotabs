import React, { Component } from "react";
import ReactGA from "react-ga";

if (process.env.NODE_ENV === "production") {
  if (typeof window !== "undefined") {
    ReactGA.initialize("G-M369TPP7TK");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

class Page extends Component {
  render() {
    return (
      <>
        <div className='main'>{this.props.children}</div>
      </>
    );
  }
}

export default Page;
