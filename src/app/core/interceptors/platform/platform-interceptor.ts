import { HttpInterceptorFn } from '@angular/common/http';

export const platformInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
