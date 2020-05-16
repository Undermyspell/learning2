import { GalleryModule } from './gallery/gallery.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default/default.component';
import { RootStoreModule } from "./root-store/root-store.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RootStoreModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
