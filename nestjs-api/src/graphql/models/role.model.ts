import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Role {
    @Field()
    roleId: number;

    @Field()
    roleKey: string;

    @Field()
    description: string;
}