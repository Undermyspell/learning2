import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/user/models";


@Injectable()
export class LearningHttpInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user: User = JSON.parse(localStorage.getItem("user"));
        const tokenizedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${user.token}`
            }
        });

        return next.handle(tokenizedRequest);
    }
}
