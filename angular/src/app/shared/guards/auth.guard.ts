import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BROWSER_STORAGE } from "../injectables";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    @Inject(BROWSER_STORAGE) private readonly storage: Storage) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.storage.getItem('user')) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
