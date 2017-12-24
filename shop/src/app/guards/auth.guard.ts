import {Injectable} from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateGuard is called');
    const url: string = state.url;
    return this.checkLogin(url);

  }

  constructor(private authService: AuthService,
              private router: Router) {
  }


  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 123456789;

    const navigationExtras: NavigationExtras = {
      queryParams: {'session_id': sessionId},
      fragment: 'anchor'
    };


    // Navigate to the login page
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateChild Guard is called');
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoad Guard is called');
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

}
