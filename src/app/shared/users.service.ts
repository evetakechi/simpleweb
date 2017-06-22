import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { User } from './user';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {

  //public currentUser = new BehaviorSubject<any>({});


  constructor(private http: Http) {


  }


  // getUser(){
  //   return this.http.get('http://localhost:8888/user')
  //   .map(response => {response.json()
  //   console.log('Data',response.json());
  //   return response.json();});
  //
  // }

  checkLogin(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/checklogin', param,{headers:headers})
      .map(response => response.json()
        //console.log('checkLogin',response.json());
      //  return response.json();
      )

  }

  registerUser(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/registeruser', param,{headers:headers})
      .map(response => {response.json()
        console.log('checkLogin',response.json());
        return response.json();
      });
  }

  updateUser(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/updateprofile', param,{headers:headers})
      .map(res => res.json());
  }

  logout(){
        localStorage.removeItem('currentUser');
    }


}
