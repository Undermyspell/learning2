import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { ContainerComponent } from './gallery/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageClassDirective } from './directives/image-class.directive';
import { ThemeableDirective } from './directives/themeable.directive';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContainerComponent,
    ImageClassDirective,
    ThemeableDirective,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
