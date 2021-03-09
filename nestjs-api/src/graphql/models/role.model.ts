import { Field, ObjectType } from "@nestjs/graphql";
import { RoleKey } from "../enums/role.enum";

@ObjectType()
export class Role {
    @Field()
    roleId: number;

    @Field(() => RoleKey)
    roleKey: RoleKey;

    @Field()
    description: string;
}