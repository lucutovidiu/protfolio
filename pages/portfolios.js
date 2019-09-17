import React from "react";
import "../static/styles/_portfolios.scss";
import BaseLayout from "../components/BaseLayout";
import Portfolio_landing_page_Card from "../components/Portfolios/Portfolio_landing_page_Card";
import useAuth from "../components/Auth/useAuth";
import { Spinner } from "react-bootstrap";
import { GetPortfoliosOnServer } from "../components/HelperFunctions";
import { fetchGraphQL } from "../components/HelperFunctions";
import UpcomingProject from "../components/Portfolios/UpcomingProject";
function Portfolios(props) {
  const auth = useAuth();
  const [dataPort, setData] = React.useState(props.dataPort);
  function ReRender(id) {
    setData({
      GetPortfolios: dataPort.GetPortfolios.filter(item => item.id !== id)
    });
  }
  return (
    <BaseLayout tab="Protfolios">
      <div className="main_wrapper">
        <div className="main_wrapper_port m-0 p-0"></div>
        {/* <div className="portfolios_title"></div> */}
        <div className="portfolios_card_wrapper mb-0 p-3">
          {props.GetUpcomingPortfolios.length > 0 &&
            props.GetUpcomingPortfolios.map(upcomingPort => (
              <UpcomingProject key={upcomingPort.id} portfolio={upcomingPort} />
            ))}
          {dataPort !== null &&
            dataPort.GetPortfolios.map((portfolio, id) => {
              return (
                <Portfolio_landing_page_Card
                  auth={auth}
                  key={id}
                  portfolio={portfolio}
                  ReRender={ReRender}
                />
              );
            })}

          {dataPort === null && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}

Portfolios.getInitialProps = async ({ req }) => {
  let dataPort = await GetPortfoliosOnServer();
  let upcomingPort = await fetchGraphQL(
    "{ GetUpcomingPortfolios { id title shortDescription technologiesUsed httpAccessLink projectStartDate repoLink } } "
  );
  return { dataPort: dataPort, ...upcomingPort };

  //
};

export default Portfolios;
