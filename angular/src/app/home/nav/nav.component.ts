import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Theme } from "src/app/enums/theme.enum";
import { AuthService } from "src/app/shared/services/auth.service";

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
  isSolar: boolean;

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  firebaseLogin() {
    this.authService.googleLogin();
  }
}
