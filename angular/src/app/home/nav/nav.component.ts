import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Theme } from "src/app/enums/theme.enum";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  @Output()
  changeTheme: EventEmitter<Theme> = new EventEmitter();

  @Output()
  changeSolar: EventEmitter<void> = new EventEmitter();

  theme = Theme;

  constructor() { }

  ngOnInit(): void {
  }
}
