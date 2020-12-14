import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpPageComponent } from 'src/app/home/sign-up-page/sign-up-page.component';

@Injectable({
  providedIn: 'root'
})
export class SignUpGuard implements CanDeactivate<SignUpPageComponent> {
  canDeactivate(
    component: SignUpPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isDirty = component.checkDirtyForm();
    if (isDirty) {
      return window.confirm('Form chưa hoàn tất.');
    }
    return false;
  }

}
