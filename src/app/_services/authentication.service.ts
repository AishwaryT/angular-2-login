import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let body = 'data=' + JSON.stringify({ username: username, password: password, request_id:1});
        return this.http.post('http://sample.me',body,{ headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });

    }

    private jwt(UserRegister: string) {   
        let _body = JSON.stringify(UserRegister);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return new RequestOptions({ 
                  headers: headers,
                  body: _body });
        }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}