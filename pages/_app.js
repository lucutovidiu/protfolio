import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ThemeProvider } from "@material-ui/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../components/material_ui/theme";
import "../static/styles/_mainStyle.scss";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

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
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }

  // render() {
  //   const { Component, pageProps } = this.props;

  //   return (
  //     <Container>
  //       <Head>
  //         <title>My page</title>
  //       </Head>
  //       {/* <ThemeProvider theme={theme}> */}
  //       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //       {/* <CssBaseline /> */}
  //       <Component {...pageProps} />
  //       {/* </ThemeProvider> */}
  //     </Container>
  //   );
  // }
}

export default MyApp;
