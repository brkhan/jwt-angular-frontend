import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
    messages = [];
    path = 'http://localhost:3001/auth'

    constructor (private http: HttpClient) {}

    TOKEN_KEY =  'token';

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
       this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
        this.saveToken(res.token)
        })
    } 

    loginUser(registerData) {
        this.http.post<any>(this.path+ '/login', registerData).subscribe(res => {
               this.saveToken(res.token)
         })
     }

     saveToken(tokn) {
        localStorage.setItem(this.TOKEN_KEY, tokn)
     }
     
     logOut() {
         localStorage.removeItem(this.TOKEN_KEY);
     }
}