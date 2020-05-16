import { SharedModule } from './../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { GalleryService } from "./services/gallery.service";
import { StoreModule } from "@ngrx/store";
import * as galleryStore from "./store"
import { EffectsModule } from "@ngrx/effects";
import { GalleryStoreEffects } from "./store/gallery.effects";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature(galleryStore.selectors.selectorKey, galleryStore.reducers.galleryReducer),
    EffectsModule.forFeature([
      GalleryStoreEffects,
    ]),
    SharedModule
  ],
  exports: [
    ContainerComponent
  ],
  providers: [
    GalleryService,
    GalleryStoreEffects
  ],
})
export class GalleryModule { }
