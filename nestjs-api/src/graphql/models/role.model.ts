import { Field, ID, ObjectType } from "@nestjs/graphql";
import { RoleDocument } from "src/schemas/role.schema";
import { RoleKey } from "../enums/role.enum";

@ObjectType()
export class Role {

    constructor(id: string,
        roleId: number,
        roleKey: RoleKey,
        description: string) {
        this.id = id;
        this.roleId = roleId;
        this.roleKey = roleKey;
        this.description = description
    }

    @Field(() => ID)
    id: string;

    @Field()
    roleId: number;

    @Field(() => RoleKey)
    roleKey: RoleKey;

    @Field()
    description: string;

    static fromMongoDb(roleDocument: RoleDocument): Role {
        return new Role(roleDocument.id, roleDocument.roleId, RoleKey[roleDocument.roleKey], roleDocument.description);
    }

    static fromId(id: string): Role {
        return new Role(id, 0, null, "");
    }
}