import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <app-spinner scale="1.5"></app-spinner>
  `,
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
