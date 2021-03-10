import { RoleService } from './../../services/role.service';
import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserContext } from "src/auth/user-context";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { AuthService } from "src/services/auth.service";
import { EventService } from "src/services/event.service";
import { UserService } from "src/services/user.service";
import { AuthData } from "../models/authData.model";
import { User } from "../models/user.model";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly userService: UserService,
        private readonly roleService: RoleService,
        private readonly authService: AuthService) {
    }

    @Query(() => AuthData)
    async login(@Args("email") email: string, @Args("password") password: string) {
        const authData: AuthData = await this.authService.login(email, password);
        return authData;
    }

    @Query(() => User)
    async user(
        @Args("email") email: string) {
        return this.userService.getByMail(email);
    }

    @ResolveField()
    async createdEvents(@Parent() user: User) {
        const { createdEvents } = user;
        return this.eventService.getByIds(createdEvents.map(ev => ev.id));
    }

    @ResolveField()
    async userRoles(@Parent() user: User) {
        const { userRoles } = user;
        return this.roleService.getByIds(userRoles.map(ev => ev.id));
    }
}