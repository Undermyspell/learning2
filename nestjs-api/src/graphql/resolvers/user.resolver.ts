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
        private readonly authService: AuthService) {
    }

    @Query(() => AuthData)
    async login(@Args("email") email: string, @Args("password") password: string) {
        const authData: AuthData = await this.authService.login(email, password);
        return authData;
    }

    @Query(() => User)
    async user(
        @CurrentUser() user: UserContext,
        @Args("email") email: string) {
        console.log(user);
        return this.userService.getByMail(email);
    }
}