import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { Observable } from "rxjs";
import { Event } from "../../gql/event.gql";

@Component({
  selector: 'app-event.container',
  templateUrl: './event.container.component.html',
  styleUrls: ['./event.container.component.sass']
})
export class EventContainerComponent implements OnInit {

  events$: Observable<Event[]>
  constructor(private readonly eventService: EventsService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.getEvents();
  }

}
