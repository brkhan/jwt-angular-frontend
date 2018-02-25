import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages = [];
    users = [];
    path = 'http://localhost:3001'

    constructor (private http: HttpClient) {}

    getMessages(userId) {
        this.http.get<any>('http://localhost:3001/posts/' + userId).subscribe(res => {
          this.messages = res
        })
    }

    getUsers() {
        this.http.get<any>('http://localhost:3001/users').subscribe(res => {
          this.users = res
          console.log(this.users);
        })
    }

    getProfile(id) {
        return this.http.get('http://localhost:3001/profile/'+ id)
    }

    postMessage(msg) {
        this.http.post(this.path + '/post', msg).subscribe(res => {

        })
    }
}