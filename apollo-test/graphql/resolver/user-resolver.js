const Event = require("../../models/event");
const { dateToString } = require('../../helper/date-helper');

const userResolver = {
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
}

module.exports = userResolver;