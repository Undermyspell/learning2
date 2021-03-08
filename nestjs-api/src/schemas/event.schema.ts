import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Document } from "mongoose";

export type EventDocument = Event & Document;

@Schema()
export class Event {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    date: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    creator: User;
}

export const EventSchema = SchemaFactory.createForClass(Event);