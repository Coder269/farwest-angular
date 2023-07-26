import { CanActivateFn, Router } from '@angular/router';
import { Services } from '../services/Services';

export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router
  let service: Services = new Services;

  if (service.isLoggedIn()) {
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
};