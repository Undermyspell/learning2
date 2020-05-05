import { Component, OnInit } from '@angular/core';
import { GalleryService } from "src/app/services/gallery.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})
export class ContainerComponent implements OnInit {

  imageUrls$: Observable<string[]>

  constructor(private readonly galleryService: GalleryService) { }

  ngOnInit(): void {
    this.imageUrls$ = this.galleryService.getImageUrls();
  }
}
