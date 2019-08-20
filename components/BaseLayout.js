import React from "react";
import NavBar from "./NavBar/NavBar";

export default function(Component, tab, func = null) {
  return class BaseLayout extends React.Component {
    static async getInitialProps(ctx) {
      return func ? func(ctx) : {};
    }

    render() {
      return (
        <>
          <NavBar tab={tab} />
          <Component props={this.props} />
        </>
      );
    }
  };
}
