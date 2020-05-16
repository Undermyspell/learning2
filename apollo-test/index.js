require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require("mongoose");
const Event = require("./models/event");
const User = require("./models/user");
const { dateToString } = require('./helper/date-helper');
const typeDefs = require("./graphql/schema")

const resolvers = {
    Query: {
        async events() {
            try {
                const events = await Event.find();
                return events.map(event => {
                    const t = {
                        ...event._doc,
                        _id: event.id,
                        date: dateToString(event._doc.date)
                    };
                    return t;
                });
            } catch (err) {
                throw err;
            }
        },
    },
    Event: {
        async creator(event) {
            try {
                const user = await User.findById(event.creator);
                const mappedUser = {
                    ...user._doc
                };
                return mappedUser;
            } catch (err) {
                throw err;
            }
        }
    },
    User: {
        async createdEvents(user) {
            try {
                const events = await Event.find({ _id: { $in: user.createdEvents} });
                return events.map(event => {
                    const t = {
                        ...event._doc,
                        date: dateToString(event._doc.date)
                    };
                    return t;
                });
            } catch (err) {
                throw err;
            }
        }
    }
};

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
