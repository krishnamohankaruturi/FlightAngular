import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/observable'
@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
    this.http=http;
   }



   
saveUser(user: any): Observable<any>
{
const headers= new HttpHeaders({'Access-control-Allow-Origin': '*'});
return this.http.post("http://localhost:8080/registration",user,{headers:headers});
}

loginUser(user: any): Observable<any>
{
const headers= new HttpHeaders({'Access-control-Allow-Origin': '*'});
return this.http.post("http://localhost:8080/login",user,{headers:headers});
}

}
