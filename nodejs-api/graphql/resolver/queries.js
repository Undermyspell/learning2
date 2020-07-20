const { dateToString } = require("../../helpers/date");
const { ApolloError, ValidationError } = require("apollo-server-express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Event = require("../../models/event");
const User = require("../../models/user");

const queries = {
    events: async (parent, args, context, info) => {
        try {
            console.log("events", context);
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
    user: async (_, args) => {
        try {
            const user = await User.find({ email: args.email });
            if (!user || user.length == 0) {
                return new ValidationError('User ID not found')
            }

            const mappedUser = {
                ...user[0]._doc
            };
            return mappedUser;
        } catch (error) {
            throw new ApolloError(error);
        }
    },
    login: async (_, { email, password }) => {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('User does not exist!');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );
        return { userId: user.id, token: token, tokenExpiration: 1 };
    }
}

module.exports = queries;