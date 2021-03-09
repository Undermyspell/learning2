import { UserContext } from "./user-context";
import * as jwt from "jsonwebtoken";

export class UserContextProvider {

    static tryGetUserContext(authHeader: string): UserContext {
        const splitToken = authHeader.split(' ');
        if (splitToken.length !== 2) {
            return null;
        }

        const jwtToken = splitToken[1];
        if (!jwtToken) {
            return null;
        }

        let decodedToken;
        try {
            decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);
        } catch (err) {
            return null;
        }

        if (!decodedToken) {
            return null;
        }

        return new UserContext(decodedToken.userId, [...decodedToken.roles]);
    }
}