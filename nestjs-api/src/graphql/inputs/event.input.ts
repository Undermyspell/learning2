import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EventInput {
    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    date: Date
}