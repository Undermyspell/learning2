const Event = require("../../models/event");
const { dateToString } = require('../../helper/date-helper');
const eventResolver = require("./event-resolver");
const userResolver = require("./user-resolver");

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
    },
    ...eventResolver,
    ...userResolver
};

module.exports = resolvers;