import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type RoleDocument = Role & Document;

@Schema()
export class Role {

  @Prop({ required: true })
  roleId: number;

  @Prop({ required: true })
  roleKey: string;

  @Prop({ required: true })
  description: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);