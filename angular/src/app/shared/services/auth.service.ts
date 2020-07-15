import { Injectable } from '@angular/core';
import { LoginGQL } from "../gql/login.gql";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
        map(result => result.data.login)
      );
  }
}
