import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const hasToken = cookieService.check('token');
  if (!hasToken) {
    router.navigate(['/auth/login']);
  }
  return hasToken;
};
