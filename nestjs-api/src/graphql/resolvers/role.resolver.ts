import { RoleService } from './../../services/role.service';
import { Query, Resolver } from "@nestjs/graphql";
import { Role } from "../models/role.model";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/guards/auth.guard";

@Resolver(() => Role)
export class RoleResolver {
    constructor(
        private readonly roleService: RoleService) {
    }

    @Query(() => [Role])
    @UseGuards(AuthGuard)
    async roles() {
        return this.roleService.getAllroles();
    }
}