const { gql } = require("apollo-server-express");

const role = gql`
  type Role {
    _id: ID!
    roleId: Int!
    roleKey: String!
    description: String!
  }

  extend type Query {
    roles: [Role!]!
  }
`;

module.exports = role;