import { registerEnumType } from "@nestjs/graphql";

export enum RoleKey {
    ADMIN,
    USER,
    GUEST
}

registerEnumType(RoleKey, {
    name: 'RoleKey',
});