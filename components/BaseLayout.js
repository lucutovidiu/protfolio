import React from "react";
import NavBar from "./NavBar/NavBar";

export default function(Component, tab) {
  return class BaseLayout extends React.Component {
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
