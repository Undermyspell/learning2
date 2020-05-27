import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  token: string;
  tokenExpiration: number;
  userId: string
}
export interface LoginResponse {
  login: User
}

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Query<LoginResponse> {
  document = gql`
      query login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
        }
    }
  `;
}
