import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthData } from "src/graphql/models/authData.model";
import { User as MongoUser, UserDocument } from "../schemas/user.schema";
import { Role as MongoRole, RoleDocument } from "../schemas/role.schema";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(MongoUser.name) private userModel: Model<UserDocument>,
        @InjectModel(MongoRole.name) private roleModel: Model<RoleDocument>) {
    }

    async login(email: string, password: string): Promise<AuthData> {
        const user = await this.userModel.findOne({ email: email });
        if (!user) {
            throw new Error("User does not exist!");
        }

        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }

        const roles = await this.roleModel.find({ _id: { $in: user.userRoles} });
        const tokenExpiration: number = 1;

        const token = jwt.sign(
            { userId: user.id, email: user.email, roles: roles.map(role => role.roleKey) },
            process.env.JWT_SECRET,
            {
                expiresIn: `${tokenExpiration}h`
            }
        );

        return new AuthData(user.id, token, tokenExpiration);
    }
}
