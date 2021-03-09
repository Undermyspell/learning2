import { RoleKey } from "src/graphql/enums/role.enum";

export class UserContext {
    constructor(public userId: string, public roleKeys: RoleKey[]) { 
    }
}