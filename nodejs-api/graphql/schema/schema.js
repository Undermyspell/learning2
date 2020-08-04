const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const schema = gql`
    type Booking {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }
    
  type Query {
    root: String
    bookings: [Booking!]!
  }

  type Mutation {
    root: String
  }
`;

module.exports = schema;