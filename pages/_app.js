import React from "react";
import App, { Container } from "next/app";
import "../static/styles/_mainStyle.scss";
import "../static/styles/_helperClases.scss";
import "../static/styles/_materialDesignInput.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import withReduxStore from "../components/React-Redux/with-redux-store";

class MyApp extends App {
  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentNode.removeChild(jssStyles);
  //   }
  // }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return { ...appProps };
  // }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
