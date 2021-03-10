import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role } from "../graphql/models/role.model";
import { Role as MongoRole, RoleDocument } from "../schemas/role.schema";

@Injectable()
export class RoleService {

    constructor(@InjectModel(MongoRole.name) private roleModel: Model<RoleDocument>) {

    }

    async getAllroles(): Promise<Role[]> {
        const mongoDbDocs = await this.roleModel
            .find()
            .exec();

        const roles = mongoDbDocs.map(doc => Role.fromMongoDb(doc));

        return roles;
    }

    async getByIds(ids: string[]): Promise<Role[]> {
        const mongoDbDocs = await this.roleModel
            .find({ _id: { $in: ids } })
            .exec();

        const roles = mongoDbDocs.map(doc => Role.fromMongoDb(doc));

        return roles;
    }
}
