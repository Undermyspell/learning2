import { Component, OnInit } from '@angular/core';
import { GalleryService } from "src/app/services/gallery.service";
import { Observable } from "rxjs";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  imageUrls$: Observable<string[]>

  constructor(private readonly galleryService: GalleryService,
    private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.imageUrls$ = this.galleryService.getImageUrls();
  }

  getSanitizedImageUrl(url: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
