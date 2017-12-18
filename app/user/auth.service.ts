/**
 * Created by jtongay on 7/3/17.
 */
import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
    currentUser:IUser;

    constructor(
      private http: Http
    ) {}

    loginUser(userName:string, password:string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
        console.log(this.currentUser)
    }

    loginUserToServer(userName: string, password: string):Observable<any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      let loginInfo = {
        username: userName,
        password
      }

      return this.http.post('/api/login', JSON.stringify(loginInfo), options).do((res: Response) => {
        if (res) {
          this.currentUser = <IUser>res.json().user;
        }
      }).catch((err) => {
        return Observable.of(false);
      })

    }

    isAuthenticated() {
        return !!this.currentUser
    }

    checkAuthenticationStatus() {
      return this.http.get('/api/currentIdentity').map((res: any) => {
        if(res._body){
          return res.json()
        } else {
          return {}
        }
      }).do(currentUser => {
        if(!!currentUser.userName) {
          this.currentUser = currentUser;
        }
      }).subscribe();
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

  updateCurrentUserToServer(firstName:string, lastName:string){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});

    return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options)

  }

    private handleError(error: Response) {
      return Observable.throw(error.statusText);
    }


}