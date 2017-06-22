import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesService {

  constructor(private http: Http) { }

  searchname(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/searchcoursesname', param,{headers:headers})
      .map(response => {response.json()
        console.log('searchcourses',response.json());
        return response.json();
      });
  }

  searchtime(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/searchcoursestime', param,{headers:headers})
      .map(response => {response.json()
        console.log('searchcourses',response.json());
        return response.json();
      });
  }

  addCourse(param){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8888/addcourse', param,{headers:headers})
      .map(response => {response.json()
        console.log('searchcourses',response.json());
        return response.json();
      });
  }

}
