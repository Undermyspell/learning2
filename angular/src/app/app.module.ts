import { EventContainerComponent } from './event/container/event/event.container.component';
import { GalleryModule } from './gallery/gallery.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './default/default.component';
import { RootStoreModule } from "./root-store/root-store.module";
import { LoginComponent } from './home/login/login.component';
import { GraphQLModule } from './graphql.module';
import { EditableComponent } from "./shared/components/editable/editable.component";
import { CloudFuncsContainerComponent } from "./cloud-funcs/cloudfuncs.container.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DefaultComponent,
    LoginComponent,
    EventContainerComponent,
    CloudFuncsContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    RootStoreModule,
    GalleryModule,
    ReactiveFormsModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
