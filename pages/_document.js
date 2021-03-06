// ./pages/_document.js
import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
			originalRenderPage({
				// useful for wrapping the whole react tree
				enhanceApp: App => App,
				// useful for wrapping in a per-page basis
				enhanceComponent: Component => Component
			});

		// Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html>
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
				/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
			</Html>
		);
	}
}

export default MyDocument;
/*


 <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
*/

// import React from "react";
// import Document, { Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
//   render() {
//     return (
//       <html lang="en">
//         <Head>
//           <meta charSet="utf-8" />
//           {/* Use minimum-scale=1 to enable GPU rasterization */}
//           <meta
//             name="viewport"
//             content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
//           />
//           {/* PWA primary color */}
//           {/* <link
//             rel="stylesheet"
//             href="../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
//           /> */}

//           <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//           />
//           <script
//             src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//             crossOrigin="anonymous"
//           />
//           <link
//             rel="stylesheet"
//             href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     );
//   }
// }

// // MyDocument.getInitialProps = async ctx => {
// //   // Resolution order
// //   //
// //   // On the server:
// //   // 1. app.getInitialProps
// //   // 2. page.getInitialProps
// //   // 3. document.getInitialProps
// //   // 4. app.render
// //   // 5. page.render
// //   // 6. document.render
// //   //
// //   // On the server with error:
// //   // 1. document.getInitialProps
// //   // 2. app.render
// //   // 3. page.render
// //   // 4. document.render
// //   //
// //   // On the client
// //   // 1. app.getInitialProps
// //   // 2. page.getInitialProps
// //   // 3. app.render
// //   // 4. page.render

// //   // Render app and page and get the context of the page with collected side effects.
// // const sheets = new ServerStyleSheets();
// // const originalRenderPage = ctx.renderPage;

// // ctx.renderPage = () =>
// //   originalRenderPage({
// //     enhanceApp: App => props => sheets.collect(<App {...props} />)
// //   });

// //   const initialProps = await Document.getInitialProps(ctx);

// //   return {
// //     ...initialProps,
// //     // Styles fragment is rendered after the app and page rendering finish.
// //     styles: [
// //       <React.Fragment key="styles">
// //         {initialProps.styles}
// //         {sheets.getStyleElement()}
// //       </React.Fragment>
// //     ]
// //   };
// // };

// export default MyDocument;
