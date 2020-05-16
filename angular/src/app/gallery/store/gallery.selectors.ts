import { GalleryImage } from './../models/gallery-image.d';
import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import * as fromState from "./gallery.state";

export const selectorKey: string = "gallery";
export const selectGalleryState: MemoizedSelector<object, fromState.GalleryState> = createFeatureSelector<fromState.GalleryState>(selectorKey);
export const selectAllImages: (state: object) => GalleryImage[] = fromState.galleryAdapter.getSelectors(selectGalleryState).selectAll;
export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(selectGalleryState, (state: fromState.GalleryState): boolean => state.isLoading);

