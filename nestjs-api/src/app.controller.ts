import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from "./models/event";
import { EventService } from "./services/event.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private readonly eventService: EventService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("events")
  async getEvents(): Promise<Event[]> {
    const ev = await this.eventService.getAllEvents();
    return ev;
  }
}
