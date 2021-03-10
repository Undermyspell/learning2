import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { EventService } from "./services/event.service";
import { Event } from "./graphql/models/event.model";
import { CookieOptions, json, Response } from "express";

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

  @Get("givemecookie")
  async givemecookie(@Res({ passthrough: true }) response: Response): Promise<any> {
    const value = "hello from cookie";
    const params: CookieOptions = {
      maxAge: 1000 * 60 * 15, // would expire after 15 minutes
      httpOnly: true,
      signed: false,
      secure: false,
      sameSite: "none"
    };

    response.cookie("mylearningcookie", value, params);
    return {};
  }
}
