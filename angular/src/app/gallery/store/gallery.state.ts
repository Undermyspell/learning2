import { GalleryImage } from './../models/gallery-image.d';
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const galleryAdapter: EntityAdapter<GalleryImage> = createEntityAdapter<GalleryImage>({
  selectId: image => image.url
});

export interface GalleryState extends EntityState<GalleryImage> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: GalleryState = galleryAdapter.getInitialState({
  isLoading: false,
  error: null
});
