import { createAction, props } from "@ngrx/store";
import { GalleryImage } from "../models";

export const loadGalleryImagesRequestAction = createAction(
  "[Gallery Container] Load Gallery Images Request"
);

export const loadGalleryImagesSuccessAction = createAction(
  "[Gallery Api] Load Gallery Images Success",
  props<{ galleryImages: GalleryImage[] }>()
);

export const loadGalleryImagesErrorAction = createAction(
  "[Gallery Api] Load Gallery Images Error",
  props<{ error: string }>()
);

