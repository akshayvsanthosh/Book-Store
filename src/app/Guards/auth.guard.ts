import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

export const authGuard: CanActivateFn = (route, state) => {
  const api=inject(ApiService)
  const router=inject(Router)

  if (api.isLoggedIn()) {
    return true
  } else {
    alert("Please Login")
    router.navigateByUrl("")
    return false
  }
};
