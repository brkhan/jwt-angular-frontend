import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private injector: Injector) {

    }
   intercept(req, next) {
      // console.log(req);
      var token = this.injector.get(AuthService).token;
      var authRequest = req.clone({
          headers: req.headers.set('authorization','token ' + token)
      })
      console.log(authRequest)
       return next.handle(authRequest)
   }
}