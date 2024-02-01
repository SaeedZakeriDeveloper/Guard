import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../service/login.service";

// 22-canActivate
export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  let result = loginService.isAuthenticated();
  if (result)
    return true
  else {
    router.navigate(['/notAuthenticated']) ;
    return false;
  }

};


export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  authGuard(route, state);

