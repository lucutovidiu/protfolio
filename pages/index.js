import React from "react";
import BaseLayout from "../components/BaseLayout";
import LandingPageInfo from "../components/LandingPageInfo";
import * as Scroll from "react-scroll";
import Footer from "../components/Footer";
import "../static/styles/_index.scss";
import HowWasThisSiteBuilt from "../components/HowWasThisSiteBuilt";

// import "../static/styles/";

function Home(props) {
  // const [getStarted, setGetStarted] = useState(false);

  return (
    <BaseLayout tab="Home">
      <div className="langing_page_wrapper">
        <div className="langing_page_content_wrapper centerText container-fluid">
          <h1 className="langing_page_h1">Welcome To My Portfolio Website</h1>
          <p className="langing_page_p1">I hope you are're going to enjoy it</p>
          <p className="langing_page_p2">Get Started</p>
          <div className="langing_page_arrow_down">
            <Scroll.Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={1500}
            >
              <span className="fas fa-arrow-alt-circle-down" />
            </Scroll.Link>
          </div>
        </div>
      </div>
      <div id="section1" className="clear-fix" />
      <LandingPageInfo />
      <HowWasThisSiteBuilt />
      <Footer />
    </BaseLayout>
  );
}

export default Home;
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Your Website
//       </MuiLink>{" "}
//       {new Date().getFullYear()}
//       {". Built with "}
//       <MuiLink color="inherit" href="https://material-ui.com/">
//         Material-UI.
//       </MuiLink>
//     </Typography>
//   );
// }
