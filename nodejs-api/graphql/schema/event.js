const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const event = gql`
    type Event {
        _id: ID
        title: String
        description: String
        price: Float
        date: String
        creator: User
    }
    
  extend type Query {
    events: [Event!]
  }

`;

module.exports = event;