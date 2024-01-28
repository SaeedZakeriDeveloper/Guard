// https://levioconsulting.com/insights/intro-to-rxjs-in-angular-observables-subjects-and-behaviorsubjects/#:~:text=Subjects%20are%20a%20type%20of,for%20changes%20(using%20subscribe()).

import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/api-interface';
import {UserService} from './user.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://localhost:3000";
  // This subject is used to emit the event of a successful (true) or unsuccessful (false) login attempt.
  private _loginSuccess$: Subject<boolean> = new Subject<boolean>();
// This BehaviourSubject is used to hold and emit the data of the logged in user, or undefined if the user is not logged in.
  private _userProfile$:BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(undefined);

  constructor( private userService: UserService) {
  }

  public get loginSuccess(): Observable<boolean> {
    return this._loginSuccess$;
  }

  public get userProfile(): Observable<IUser | undefined> {
    return this._userProfile$;
  }

  // soal inke ma bayad koja az method find estefade konim ?
  // javab inke agar bekhahim az natijeye sub estefade konim faghat va faghat vayad dakhele block subscribe az method find estefade kpnim

  login(email: string, password: string) {
    let users: IUser[] = [];
    //CRUD    create      read      update      delete
    //        post        get       post/put    delete
    this.userService.get().subscribe((res:IUser[]) => {
        users = res;
        let user:IUser|undefined = users.find(x => x.email === email && x.password === password);
        if (user) {
          this._loginSuccess$.next(true);
          this._userProfile$.next(user);
        } else {
          this._loginSuccess$.next(false);
        }
      }
    );
  }


}
