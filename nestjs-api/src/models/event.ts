import { EventDocument } from "../schemas/event.schema";

export class Event {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number,
        public date: Date,
        public creator: string) { }

    static fromMongoDb(eventDocument: EventDocument): Event {
        return new Event(eventDocument.id, eventDocument.title, eventDocument.description, eventDocument.price, eventDocument.date, eventDocument.creator?.email);
    }
}