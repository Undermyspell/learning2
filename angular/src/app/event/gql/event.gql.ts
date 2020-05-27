import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface Event {
  _id: string;
  title: string;
  description: string;
  price: number;
  date: Date;
  creator: string;
}
export interface Response {
  events: Event[];
}

@Injectable({
  providedIn: 'root',
})
export class EventsGQL extends Query<Response> {
  document = gql`
      query events {
        events {
          _id
          title
          description
        }
      } 
  `;
}
