import { Component, OnInit } from '@angular/core';
import { EventsService } from "../../services/events.service";
import { Observable } from "rxjs";
import { Event } from "../../gql/event.gql";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-event.container',
  templateUrl: './event.container.component.html',
  styleUrls: ['./event.container.component.sass']
})
export class EventContainerComponent implements OnInit {

  events$: Observable<{ event: Event, sig: number }[]>
  constructor(private readonly eventService: EventsService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.getEvents()
      .pipe(map(events => (events.map(ev => ({ event: ev, sig: this.getRandomNumber() })))));
  }

  getRandomNumber() {
    return (Math.floor(Math.random() * 10));
  }
}
