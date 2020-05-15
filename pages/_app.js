import React from "react";
import App, {Container} from "next/app";
import "../public/static/styles/_mainStyle.scss";
import "../public/static/styles/_helperClases.scss";
import "../public/static/styles/_materialDesignInput.scss";
import "../public/static/styles/_Footer.scss";
import "../public/static/styles/_NavBar.scss";
import "../public/static/styles/_index.scss";
import "../public/static/styles/_portfolios.scss";
import "../public/static/styles/_login.scss";
import "../public/static/styles/_contactForm.scss";
import "../public/static/styles/_aboutme.scss";
import "../public/static/styles/_addNewPortfolio.scss";
import "../public/static/styles/_Portfolio_id.scss";

import "bootstrap/scss/bootstrap.scss";

import {Provider} from "react-redux";
import withReduxStore from "../components/React-Redux/with-redux-store";
import "react-datepicker/dist/react-datepicker.css";

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
		const {Component, pageProps, reduxStore} = this.props;
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withReduxStore(MyApp);
