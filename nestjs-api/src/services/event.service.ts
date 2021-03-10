import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserContext } from "src/auth/user-context";
import { CurrentUser } from "src/decorators/current-user.decorator";
import { EventInput } from "src/graphql/inputs/event.input";
// import { Event } from "../models/event";
import { Event } from "../graphql/models/event.model";
import { Event as MongoEvent, EventDocument } from "../schemas/event.schema";

@Injectable()
export class EventService {

    constructor(@InjectModel(MongoEvent.name) private eventModel: Model<EventDocument>) {

    }

    async getAllEvents(): Promise<Event[]> {
        const mongoDbDocs = await this.eventModel
            .find()
            .exec();

        const events = mongoDbDocs.map(doc => Event.fromMongoDb(doc));

        return events;
    }

    async getByIds(ids: string[]): Promise<Event[]> {
        const mongoDbDocs = await this.eventModel
            .find({ _id: { $in: ids } })
            .exec();

        const events = mongoDbDocs.map(doc => Event.fromMongoDb(doc));

        return events;
    }

    async create(
        eventInput: EventInput,
        creatorId: string): Promise<Event> {

        const eventDoc = await this.eventModel.create({
            ...eventInput,
            creator: creatorId
        });

        const event = Event.fromMongoDb(eventDoc);

        return event;
    }
}
