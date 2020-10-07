import { Injectable } from '@angular/core';
import { LoginGQL } from "../gql/login.gql";
import { from, Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { User } from "src/app/user/models";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  firebaseUser$: Observable<any>;

  constructor(private readonly loginGQL: LoginGQL,
    private readonly fireAuth: AngularFireAuth) {
    this.firebaseUser$ = this.fireAuth.authState;
  }

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

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.fireAuth.signInWithPopup(provider);
    const token = await credential.user.getIdToken();
    console.log(token);
    console.log(credential.user.uid);
    return "";
  }
}
