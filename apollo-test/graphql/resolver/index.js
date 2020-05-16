const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require('../../helper/date-helper');

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

module.exports = resolvers;