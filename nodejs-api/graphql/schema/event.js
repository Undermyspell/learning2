const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const event = gql`
    type Event {
        _id: ID
        title: String
        description: String
        price: Float
        date: String
        creator: User @auth(requires: ADMIN)
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!,
      creator: ID!
    }
    
  extend type Query {
    events: [Event!]
  }

  extend type Mutation {
    createEvent(eventInput: EventInput): Event
  }
`;

module.exports = event;