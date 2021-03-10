import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { UserDocument } from "src/schemas/user.schema";
import { RoleKey } from "../enums/role.enum";
import { Event } from "./event.model";
import { Role } from "./role.model";

@ObjectType()
export class User {

    constructor(
        id: string,
        email: string,
        createdEvents: string[],
        userRoles: string[]
    ) {
        this.id = id;
        this.email = email;
        this.createdEvents = createdEvents.map(id => Event.fromId(id));
        this.userRoles = userRoles.map(id => Role.fromId(id));;
    }

    @Field(() => ID)
    id: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field(() => [Event], { nullable: true })
    createdEvents: Event[];

    @Directive(`@auth(requires: ${RoleKey[RoleKey.ADMIN]})`)
    @Field(() => [Role], { nullable: true })
    userRoles: Role[];

    static fromMongoDb(userDocument: UserDocument): User {
        return new User(userDocument.id, userDocument.email, userDocument.createdEvents, userDocument.userRoles);
    }

    static fromId(id: string): User {
        return new User(id, "", [], []);
    }
}