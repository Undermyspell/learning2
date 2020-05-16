const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require("mongoose");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
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
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

  type Query {
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): AuthData!
  }
`;

const resolvers = {
    Query: {
        async events() {
            return [];
        },
    },
    Event: {
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.get("/", function (req, res) {
    res.send("Hello from container land!");
});
app.get("/test", function (req, res) {
    res.send("Hello from test land!");
});
server.applyMiddleware({ app });

app.set("port", process.env.PORT || 3000);

mongoose
    .connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(app.get("port"), () => {
            console.log(`Server listening on port ${app.get("port")}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
