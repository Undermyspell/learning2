import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import * as actions from "./gallery.actions";
import * as fromState from "./gallery.state";

const reducer: ActionReducer<fromState.GalleryState, Action> = createReducer(fromState.initialState,
  on(actions.loadGalleryImagesSuccessAction,
    state => ({
      ...state,
      isLoading: true,
    })),
  on(actions.loadGalleryImagesSuccessAction,
    (state, { galleryImages }) => (
      fromState.galleryAdapter.setAll(galleryImages, {
        ...state,
        isLoading: false,
        error: false
      }))),
  on(actions.loadGalleryImagesErrorAction,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error
    })),
);

// This export function is necessary for AOT compiling in production build
// https://ngrx.io/guide/store/reducers
export function galleryReducer(state: fromState.GalleryState | undefined, action: Action): fromState.GalleryState {
  return reducer(state, action);
}
