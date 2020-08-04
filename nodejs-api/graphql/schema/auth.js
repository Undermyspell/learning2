const { gql } = require("apollo-server-express");

const authData = gql`
   type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

  extend type Query {
    login(email: String!, password: String!): AuthData!
  }
`;

module.exports = authData;