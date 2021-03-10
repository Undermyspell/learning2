import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../graphql/models/user.model";
import { User as MongoUser, UserDocument } from "../schemas/user.schema";

@Injectable()
export class UserService {

    constructor(@InjectModel(MongoUser.name) private userModel: Model<UserDocument>) {
    }

    async get(id: string): Promise<User> {
        const userDoc = await this.userModel
            .findById(id)
            .exec();

        const user = User.fromMongoDb(userDoc);
       
        return user;
    }

    async getByMail(email: string): Promise<User> {
        const userDocs = await this.userModel
            .find({ email: email })
            .exec();

        if (!userDocs || userDocs.length == 0) {
            throw "User not found";
        }

        const user = User.fromMongoDb(userDocs[0]);

        return user;
    }
}
