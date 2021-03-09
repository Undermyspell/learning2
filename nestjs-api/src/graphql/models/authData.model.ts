import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthData {

    constructor(userId: string, token: string, tokenExpiration: number) {
        this.userId = userId;
        this.token = token;
        this.tokenExpiration = tokenExpiration;
    }

    @Field(() => ID)
    userId: string;

    @Field()
    token: string;

    @Field(() => Int)
    tokenExpiration: number;
}