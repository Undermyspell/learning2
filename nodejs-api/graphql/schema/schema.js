const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const schema = gql`
    directive @auth(
      requires: RoleEnum = USER,
    ) on OBJECT | FIELD_DEFINITION

    enum RoleEnum {
      ADMIN
      USER
      GUEST
    }

    type Booking {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }

    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
    }

    type User {
        _id: ID!
        email: String!
        password: String
        createdEvents: [Event!]
        userRoles: [Role!] @auth(requires: ADMIN)
    }

    type Role {
      _id: ID!
      roleId: Int!
      roleKey: String!
      description: String!
  }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
    
  input UserInput {
    email: String!
    password: String!
    roles: [Int!]!
  }

  type Query {
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): AuthData!
    user(email: String!): User
    roles: [Role!]!
  }

  type Mutation {
    createUser(userInput: UserInput): User
  }
`;

module.exports = schema;