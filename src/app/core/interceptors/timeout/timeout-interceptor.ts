import { HttpInterceptorFn } from '@angular/common/http';

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
