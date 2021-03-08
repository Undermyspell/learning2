import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Event } from "./event.schema";
import { Role } from "./role.schema";

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }] })
    createdEvents: Event[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }] })
    userRoles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);