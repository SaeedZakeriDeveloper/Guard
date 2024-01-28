import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/api-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000"


  //CRUD    create      read      update      delete
  //        post        get       post/put    delete



  add(user: IUser) {
   return this.http.post(this.url + '/users', user);
  }



  get() {
   return this.http.get<IUser[]>(this.url + '/users')
  }



  delete(id: number) {
    return this.http.delete(this.url + '/users/' + id);
  }




}
