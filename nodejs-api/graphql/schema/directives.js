const { gql } = require("apollo-server-express");

const directives = gql`
    directive @auth(
      requires: RoleEnum = USER,
    ) on OBJECT | FIELD_DEFINITION

    enum RoleEnum {
      ADMIN
      USER
      GUEST
    }
`;

module.exports = directives;