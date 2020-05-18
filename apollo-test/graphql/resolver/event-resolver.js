const User = require("../../models/user");

const eventResolver = {
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
    }
}

module.exports = eventResolver;