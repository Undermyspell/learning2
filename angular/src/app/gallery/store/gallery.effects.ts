import { GalleryImage } from './../models/gallery-image.d';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { GalleryService } from "../services/gallery.service";
import * as actions from "./gallery.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class GalleryStoreEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly galleryService: GalleryService) { }

  loadGalleryImagesEffect$ = createEffect(() => this.actions$
    .pipe(
      ofType(actions.loadGalleryImagesRequestAction),
      switchMap(() => {
        return this.galleryService.getImageUrls().pipe(
          map((imageUrls: string[]) => actions.loadGalleryImagesSuccessAction({
            galleryImages: imageUrls.map(url => { return { url } })
          })),
          catchError((error: any) => of(actions.loadGalleryImagesErrorAction({ error })))
        );
      })
    ), { useEffectsErrorHandler: false });
}
