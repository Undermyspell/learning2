import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserDocument } from "src/schemas/user.schema";
import { Event } from "./event.model";
import { Role } from "./role.model";

@ObjectType()
export class User {

    constructor(
        id: string,
        email: string
    ) {
        this.id = id;
        this.email = email;
        this.createdEvents = [];
        this.userRoles = [];
    }

    @Field(() => ID)
    id: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field(() => [Event], { nullable: true })
    createdEvents: Event[];

    @Field(() => [Role], { nullable: true })
    userRoles: Role[];

    static fromMongoDb(userDocument: UserDocument): User {
        return new User(userDocument.id, userDocument.email);
    }
}