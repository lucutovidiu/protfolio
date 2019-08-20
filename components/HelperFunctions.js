import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("http://localhost:3000/api/graphql");

export const fetchGraphQL = async function(query) {
  return client.request(query);
};
