import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserContext } from "src/auth/user-context";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { AuthGuard } from "src/guards/auth.guard";
import { EventService } from "src/services/event.service";
import { UserService } from "src/services/user.service";
import { EventInput } from "../inputs/event.input";
import { Event } from "../models/event.model";

@Resolver(() => Event)
export class EventResolver {
    constructor(
        private readonly eventService: EventService,
        private readonly userService: UserService) {
    }

    @Query(() => [Event])
    async events() {
        return this.eventService.getAllEvents();
    }

    @Mutation(() => Event)
    @UseGuards(AuthGuard)
    async createEvent(
        @Args("eventInput") eventInput: EventInput,
        @CurrentUser() user: UserContext) {
        return this.eventService.create(eventInput, user.userId);
    }

    @ResolveField()
    async creator(@Parent() event: Event) {
        const { creator: { id } } = event;
        return this.userService.get(id);
    }
}