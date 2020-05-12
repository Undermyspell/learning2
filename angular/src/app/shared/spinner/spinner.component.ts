import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
     <div class="spinner-container">
        <span>Loading</span>
     </div>
  `,
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
