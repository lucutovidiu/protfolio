import React from "react";
import NavBar from "./NavBar/NavBar";

export default function(props) {
  // return class BaseLayout extends React.Component {
  //   static async getInitialProps(ctx) {
  //     return func ? func(ctx) : {};
  //   }
  {
    /* <Component props={this.props} /> */
  }
  return (
    <>
      <NavBar tab={props.tab} />
      {props.children}
    </>
  );
}
// }
