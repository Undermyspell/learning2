import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { SayHelloMessage } from "./models/sayhello";
import { CloudFuncsService } from "./services/cloudfuncs.service";

@Component({
  selector: 'app-event.container',
  templateUrl: './cloudfuncs.container.component.html',
  styleUrls: ['./cloudfuncs.container.component.sass']
})
export class CloudFuncsContainerComponent implements OnInit {

  sayHelloMessage$: Observable<SayHelloMessage>;

  constructor(private cloudFuncsService: CloudFuncsService) { }

  ngOnInit(): void {
    this.sayHelloMessage$ = this.cloudFuncsService.sayHello();
  }
}
