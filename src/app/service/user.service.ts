import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/iUser';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  //CRUD    create      read      update      delete
  //        post        get       post/put    delete

  add(user: IUser) {
    return this.http.post(this.url + '/users', user);
  }

  get() {
    return this.http.get<IUser[]>(this.url + '/users');
  }

}
