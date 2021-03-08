import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { EventService } from "src/services/event.service";
import { UserService } from "src/services/user.service";
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

    @ResolveField()
    async creator(@Parent() event: Event) {
        const { creator: { id } } = event;
        return this.userService.get(id);
    }
}