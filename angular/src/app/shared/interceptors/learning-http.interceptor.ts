import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/user/models";
import { BROWSER_STORAGE } from "../injectables";


@Injectable()
export class LearningHttpInterceptor implements HttpInterceptor {
  constructor(@Inject(BROWSER_STORAGE) private readonly storage: Storage) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: User = JSON.parse(this.storage.getItem("user"));
    const tokenizedRequest = user ? request.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    }) : request;

    return next.handle(tokenizedRequest);
  }
}
