import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let token = window.localStorage.getItem('token')
  let authReq = req.clone();


  if(token){
    authReq = req.clone({
      setHeaders: {
        Authorization:` Bearer ${token}`
      }
    });
  }

  return next(authReq);
};
