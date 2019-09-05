var { buildSchema } = require("graphql");

var schema = buildSchema(`
  scalar Date
  type PortImagesType{
    image_src: String!
    image_description: String!
  }
  type Portfolio {
    id: ID
    title: String!
    shortDescription: String!
    technologiesUsed: String!
    thumbImage: String!
    moreImages: [PortImagesType]
    fullDescription: String!
    rootDirectory:String!
    httpAccessLink:String
    repoLink:String
    projectStartDate:Date
    projectEndDate:Date
    createdAt:String
    updatedAt:String
  }
  input PortImagesInput{
    image_src: String!
    image_description: String!
  }
  input PortfolioInputData {
    title: String!
    shortDescription: String!
    technologiesUsed: String!
    thumbImage: String!
    moreImages: [PortImagesInput!]
    fullDescription: String!
    rootDirectory:String!
    httpAccessLink:String
    projectStartDate:Date
    projectEndDate:Date
  }
  input EditPortfolioInputData {
    title: String!
    shortDescription: String!
    technologiesUsed: String!
    thumbImage: String!
    moreImages: [PortImagesInput!]
    fullDescription: String!
    rootDirectory:String
    httpAccessLink:String
    projectStartDate:Date
    projectEndDate:Date
  }
  type User {
    id: ID
    userName:String!
    userEmail: String!
    password: String!
    role: String!
    createdAt:String
    updatedAt:String
  }
  input UserInputData {
    userEmail: String!
    password: String!
    role: String!
  }

  type RootQuery {
    GetPortfolios: [Portfolio]
    GetPortfolio(_id:ID!): Portfolio
    GetUser(userEmail:String!): User!
    TryLogin(userEmail:String!,password:String!): String!
  }
  type RootMutation {
    AddPortfolio(portfolioInput : PortfolioInputData!): Portfolio!
    EditPortfolio(portfolioInput : EditPortfolioInputData!,portfolioID:ID!): Portfolio!
    RemovePortfolio(portfolioID : ID!,portfolioTitle: String!): Boolean!
    AddUser(userInput:UserInputData!): User!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
module.exports = {
  schema
};
