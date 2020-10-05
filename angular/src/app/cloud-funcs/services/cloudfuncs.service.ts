import { Injectable, OnInit, Directive } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SayHelloMessage } from "../models/sayhello";

@Directive()
@Injectable({
  providedIn: 'root'
})
export class CloudFuncsService {
  constructor(private httpClient: HttpClient) { }

  sayHello(): Observable<SayHelloMessage> {
    return this.httpClient.get<SayHelloMessage>("/api/sayhello")
  }
}
