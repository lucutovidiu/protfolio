import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("http://localhost:3000/api/graphql");

export const fetchGraphQL = async function(query, headers = null) {
  if (headers) {
    {
      client.setHeaders(headers);
    }
    return client.request(query);
  } else {
    const client = new GraphQLClient("http://localhost:3000/api/graphql");
    return client.request(query);
  }
};
