import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})


export class LoginComponent { 
    loginData: { }

    constructor(private authService: AuthService, private router: Router) {
        this.loginData = {};
    }

    post() {
        console.log(this.loginData);    
        this.authService.loginUser(this.loginData);
        this.router.navigate(['/']);
    }

}