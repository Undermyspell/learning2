const Event = require("../../models/event");
const Role = require("../../models/role");
const { dateToString } = require('../../helpers/date');

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
        },
        async userRoles(user) {
            try {
                const roles = await Role.find({ _id: { $in: user.userRoles} });
                return roles.map(event => {
                    const t = {
                        ...event._doc
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