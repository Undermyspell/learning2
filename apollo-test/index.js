require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema/schema")
const resolvers = require("./graphql/resolver/index")

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.get("/", function (req, res) {
    res.send("Hello from container land!");
});

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

server.applyMiddleware({ app });
