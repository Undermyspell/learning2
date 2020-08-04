const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const user = gql`
    type User  @auth(requires: ADMIN) {
        _id: ID!
        email: String!
        password: String
        createdEvents: [Event!]
        userRoles: [Role!] @auth(requires: ADMIN)
    }
    
  input UserInput {
    email: String!
    password: String!
    roles: [Int!]!
  }

  extend type Query {
    user(email: String!): User
  }

  extend type Mutation {
    createUser(userInput: UserInput): User
  }
`;

module.exports = user;