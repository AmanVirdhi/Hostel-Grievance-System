// import { CanActivateFn } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';

// constructor(private userservice:UserService){}
// export const authGuard: CanActivateFn = (route, state) => {
//   return this.userservice.isUserLoggedIn;
// };

import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';  // To inject the service inside the function
import { UserService } from 'src/app/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService); // Injecting the service
  if(localStorage.getItem('user')){
    return true;
  }
  return userService.isUserLoggedIn; // Calling the method to check login status
};
