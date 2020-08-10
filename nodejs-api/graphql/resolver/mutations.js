
const bcrypt = require('bcryptjs');
const User = require("../../models/user");
const Event = require("../../models/event");
const Role = require("../../models/role");
const { ApolloError } = require("apollo-server-express");


const mutations = {
    createUser: async (_, args) => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email });
            if (existingUser) {
                throw new ApolloError('User exists already.');
            }

            const roles = await Role.find({ roleId: { $in: args.userInput.roles } });
            if (roles.length !== args.userInput.roles.length) {
                throw new ApolloError('At least one role does not exist.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                email: args.userInput.email,
                password: hashedPassword,
                userRoles: roles.map(role => role._id)
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id };
        } catch (error) {
            throw new ApolloError(error);
        }
    },

    createEvent: async (_, args) => {
        try {
            const creator = await User.findOne({ _id: args.eventInput.creator });
            if (!creator) {
                throw new ApolloError('User doest not exist.');
            }

            const event = new Event({
                title: args.eventInput.title,
                description: args.eventInput.description,
                price: args.eventInput.price,
                creator: args.eventInput.creator,
                date: args.eventInput.date,
            });

            const result = await event.save();

            return { ...result._doc, _id: result.id };
        } catch (error) {
            throw new ApolloError(error);
        }
    }
}

module.exports = mutations;