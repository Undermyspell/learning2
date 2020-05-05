import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private readonly http: HttpClient) { }

  getImageUrls(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:3000/imageurls")
      .pipe(map(urls => urls.map(url => `http://localhost:3000/images/${url}`)));
  }
}
