require('dotenv').config();
const express = require('express');
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema/schema")
const resolvers = require("./graphql/resolver/index")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        const authHeader = req.get('Authorization');

        console.log(token);
        console.log(authHeader);

        // add the user to the context
        return { token };
    },
});

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send("Hello from container land!");
});

app.get("/imageurls", (req, res, next) => {
    const filenames = [];
    const directoryPath = path.join(__dirname, 'images');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.filter(file => file.match(/\.(svg|png|jpg|gif|svg)$/)).forEach(function (file) {
            filenames.push(file);
        });

        res.json(filenames);
    });
});

app.use('/images', express.static(path.join(__dirname, 'images')));

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
