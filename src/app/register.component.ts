import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})


export class RegisterComponent { 
    registerData: { }

    constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {
        this.registerData = {};
    }

    post() {
        console.log(this.registerData);
        this.authService.registerUser(this.registerData);
        this.router.navigate(['/']);
    }

}