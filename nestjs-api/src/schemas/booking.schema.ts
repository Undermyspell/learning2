import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Event } from "./event.schema";
import { User } from "./user.schema";

export type Bookingocument = Booking & Document;

@Schema({ timestamps: true })
export class Booking {
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Event" })
    event: Event;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user: User;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);