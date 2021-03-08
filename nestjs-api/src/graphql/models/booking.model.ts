import { Field, ObjectType } from "@nestjs/graphql";
import { Event } from "./event.model";
import { User } from "./user.model";

@ObjectType()
export class Booking {
    @Field(() => Event)
    event: Event;

    @Field(() => User)
    user: User;
}