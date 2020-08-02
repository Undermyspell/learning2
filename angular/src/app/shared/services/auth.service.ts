import { Injectable } from '@angular/core';
import { LoginGQL } from "../gql/login.gql";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { User } from "src/app/user/models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly loginGQL: LoginGQL) { }

  login(email: string, password: string): Observable<User> {
    return this.loginGQL.watch({
      email,
      password
    })
      .valueChanges.pipe(
        catchError(err => {
          console.log(err)
          return of(null);
        }),
        map(result => result.data.login)
      );
  }
}
