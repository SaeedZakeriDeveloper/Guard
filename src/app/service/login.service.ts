// https://levioconsulting.com/insights/intro-to-rxjs-in-angular-observables-subjects-and-behaviorsubjects/#:~:text=Subjects%20are%20a%20type%20of,for%20changes%20(using%20subscribe()).

import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/iUser';
import {UserService} from './user.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:3000";
  authenticated: boolean = false;
  // This subject is used to emit the event of a successful (true) or unsuccessful (false) login attempt.
  // سابجکت تنها زمانی که نکست میشود، ایونت و مقدار را امیت می کند و بعد از این لحظه دیگر نه امیت می شود و نه مقداری دارد.
  private _loginSuccess$: Subject<any> = new Subject<any>();
  // This BehaviourSubject is used to hold and emit the data of the logged in user, or undefined if the user is not logged in.
  // بی هی وی ار سابجکت زمانی که نکست میشود، ایونت و مقدار را امیت می کند و پس از این لحظه نیز همچنان مقدار را داخل خودش نگه می دارد.
  private _userProfile$: BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(undefined);

  constructor(private userService: UserService, private router: Router, private routes: ActivatedRoute) {
  }

  public get loginSuccess(): Observable<boolean> { // This is a property get
    return this._loginSuccess$;
  }

  public get userProfile(): Observable<IUser | undefined> {
    return this._userProfile$;
  }

  login(email: string, password: string) {
    let users: IUser[] = [];

    this.userService.get().subscribe((res: IUser[]) => {
        users = res;
        let user: IUser | undefined = users.find(x => x.email === email && x.password === password);
        if (user) {
          this.authenticated = true;
          this._loginSuccess$.next({ // زمانی که سابجکت نکست می شود، همزمان همه جاهایی که سابجکت سابسکرایب شده است فایر می شوند
            value: true,
            event: 'login'
          });
          this._userProfile$.next(user);
        } else {
          this._loginSuccess$.next({
            value: false,
            event: 'login'
          });
        }
      }
    );
  }

  logout() {
    this._loginSuccess$.next({
      value: false,
      event: 'logout'
    });
    this.authenticated = false;
    this.router.navigate([''], {relativeTo: this.routes});
  }

  isAuthenticated() {
    return this.authenticated;
  }

}
