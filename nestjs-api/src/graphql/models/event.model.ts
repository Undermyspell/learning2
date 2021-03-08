import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { EventDocument } from "src/schemas/event.schema";
import { User } from "./user.model";

@ObjectType()
export class Event {

    constructor(
        id: string,
        title: string,
        description: string,
        price: number,
        date: Date,
        creatorId: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.date = date;
        this.creator = new User(creatorId, null);
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

    @Field(() => User)
    creator: User;

    static fromMongoDb(eventDocument: EventDocument): Event {
        return new Event(eventDocument.id, eventDocument.title, eventDocument.description, eventDocument.price, eventDocument.date, eventDocument.creator.toString());
    }
}