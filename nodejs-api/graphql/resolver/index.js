const eventResolver = require("./event-resolver");
const userResolver = require("./user-resolver");
const queries = require("./queries");
const mutations = require("./mutations");


const resolvers = {
    Query: {
      ...queries
    },
    Mutation: {
      ...mutations
    },
    ...eventResolver,
    ...userResolver
};

module.exports = resolvers;