import { ThemeableDirective } from './shared/directives/themeable.directive';
import { Component, ViewChild } from '@angular/core';
import { Theme } from "./enums/theme.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular';
  theme: Theme = Theme.dark;

  @ViewChild(ThemeableDirective) themeable: ThemeableDirective;

  onChangeTheme(theme: Theme): void {
    this.theme = theme;
  }

  onChangeSolar(): void {
    this.themeable.toggleSolar()
  }
}
