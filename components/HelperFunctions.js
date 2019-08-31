import { GraphQLClient } from "graphql-request";
import fetch from "isomorphic-unfetch";
const client = new GraphQLClient("http://localhost:3000/api/graphql");

export const fetchGraphQL = async function(query, headers = null) {
  if (headers) {
    {
      client.setHeaders(headers);
    }
    return client.request(query);
  } else {
    return client.request(query);
  }
};

export const checkIfisAuthorized = async function(jwtToken) {
  const url = "/api/CheckIfAuthenticated";
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jwtToken
    })
  }).then(data => {
    // console.log(data);
    return data.json();
  });
};

export function GetPortfoliosOnServer() {
  let query =
    "{GetPortfolios{id title shortDescription technologiesUsed thumbImage }}";
  return client.request(query);
}

export function AddTimeStampToFileName(fileName) {
  let timeStamp = new Date().getTime();
  let withoutExtension = fileName.split(/\..*$/)[0];
  withoutExtension += timeStamp;
  let extension = fileName.match(/\..*$/)[0];
  return withoutExtension + extension;
}
