import React from "react";
import { GetAllMessages } from "../../components/HelperFunctions";
import { Table } from "react-bootstrap";
import moment from "moment";

const getAllMessages = () => {
  const [visitors, setVisitors] = React.useState([]);
  const [emails, setEmails] = React.useState([]);
  React.useEffect(() => {
    GetAllMessages().then(data => {
      let visitorsData = data.filter(item => item.type === "VISIT");
      setVisitors(visitorsData);
      setEmails(data.filter(item => item.type === "EMAIL"));
    });
  }, []);
  console.log("v", visitors);
  console.log("e", emails);
  return (
    <>
      <h2 className="text-center">Visitors</h2>
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map(item => {
            let geoLocation = JSON.parse(item.geoLocation);
            if (typeof geoLocation.Country !== "undefined") {
              let keys = Object.keys(geoLocation);
              keys.forEach((key, index) => {
                return (
                  <tr key={index}>
                    <th>{key}</th>
                    <th>{item[key]}</th>
                  </tr>
                );
              });
            } else {
              return null;
            }
          })}
        </tbody>
      </Table>
    </>
  );
};

export default getAllMessages;
