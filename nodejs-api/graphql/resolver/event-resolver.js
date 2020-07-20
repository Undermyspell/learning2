const User = require("../../models/user");

const eventResolver = {
    Event: {
        async creator(event, args, context, info) {
            try {
                console.log("creator from event", context);
                const user = await User.findById(event.creator);
                const mappedUser = {
                    ...user._doc
                };
                return mappedUser;
            } catch (err) {
                throw err;
            }
        }
    }
}

module.exports = eventResolver;