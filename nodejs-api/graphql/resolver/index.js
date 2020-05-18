const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");
const eventResolver = require("./event-resolver");
const userResolver = require("./user-resolver");
const { ApolloError, ValidationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        async events() {
            try {
                const events = await Event.find();
                return events.map(event => {
                    return {
                        ...event._doc,
                        _id: event.id,
                        date: dateToString(event._doc.date)
                    };
                });
            } catch (err) {
                throw err;
            }
        },
        async user(_, args) {
            try {
                const user = await User.find({email: args.email});  
                if(!user || user.length == 0) {
                    return new ValidationError('User ID not found')
                }

                const mappedUser = {
                    ...user[0]._doc
                };
                return mappedUser;
            } catch (error) {
              throw new ApolloError(error);
            }
        }
    },
    ...eventResolver,
    ...userResolver
};

module.exports = resolvers;