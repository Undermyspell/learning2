import { Injectable, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { EventsGQL } from "../gql/event.gql";
import { Event } from "../gql/event.gql";

@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnInit {
  loading = true;
  error: any;

  constructor(private eventsGQL: EventsGQL) { }

  getEvents(): Observable<Event[]> {
    return this.eventsGQL.watch()
      .valueChanges.pipe(
        map(result => result.data.events)
      );
  }

  ngOnInit(): void {

  }
}
