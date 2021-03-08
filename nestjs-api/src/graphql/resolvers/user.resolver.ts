import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { EventService } from "src/services/event.service";
import { UserService } from "src/services/user.service";
import { User } from "../models/user.model";

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly userService: UserService) {
    }

    @Query(() => User)
    async user(@Args("email") email: string) {
        return this.userService.getByMail(email);
    }
}