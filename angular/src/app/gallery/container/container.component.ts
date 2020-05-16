import { GalleryImage } from './../models/gallery-image.d';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from "src/app/gallery/services/gallery.service";
import { Observable } from "rxjs";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { GalleryState } from "../store/gallery.state";
import * as selectors from "../store/gallery.selectors";
import * as actions from "../store/gallery.actions";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  imageUrls$: Observable<GalleryImage[]>

  constructor(private readonly galleryService: GalleryService,
    private readonly store$: Store<GalleryState>,
    private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.imageUrls$ = this.store$.select(selectors.selectAllImages); //this.galleryService.getImageUrls();
    this.store$.dispatch(actions.loadGalleryImagesRequestAction());
  }

  getSanitizedImageUrl(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
