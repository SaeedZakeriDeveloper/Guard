import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../service/login.service";

// 22-canActivate
export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isAuthenticated().then((res) => {
      if (res == true) {
        return true;
      } else {
        router.navigate(['/notAuthenticated']);
        return false;
      }
    }
  );
};

// 23-canActivateChild
export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  authGuard(route, state);
