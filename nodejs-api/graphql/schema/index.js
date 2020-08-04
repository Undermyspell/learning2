const role = require('./role');
const user = require('./user');
const auth = require('./auth');
const event = require('./event');
const directives = require('./directives')
const rootSchema = require('./schema');

const schemaArray = [rootSchema, role, user, event, auth, directives];

module.exports = schemaArray;