import { Directive, Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { EventDocument } from "src/schemas/event.schema";
import { RoleKey } from "../enums/role.enum";
import { User } from "./user.model";

@ObjectType()
export class Event {

    constructor(
        id: string,
        title: string,
        description: string,
        price: number,
        date: Date,
        creator: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
        this.creator = User.fromId(creator)
    }

    @Field(() => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    date: Date;

    @Directive(`@auth(requires: ${RoleKey[RoleKey.ADMIN]})`)
    @Field(() => User, { nullable: true })
    creator: User;

    static fromMongoDb(eventDocument: EventDocument): Event {
        return new Event(eventDocument.id, eventDocument.title, eventDocument.description, eventDocument.price, eventDocument.date, eventDocument.creator);
    }

    static fromId(id: string): Event {
        return new Event(id, "", "", 0, null, "");
    }
}