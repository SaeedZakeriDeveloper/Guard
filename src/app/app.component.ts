import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "./service/login.service";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription [] = []
  title = 'guard';
  isAuthenticated: boolean = false;

  constructor(private loginService: LoginService) {
  }

  onLogout() {
    this.isAuthenticated = false
    this.loginService.logout();
  }

  ngOnInit(): void {
    this.subscription.push(
      // تنها لحظه ایی این سابجکت فایر می شود که در لاگین سرویس نکست شده باشد
      this.loginService.loginSubject.subscribe((res: any) => {
        this.isAuthenticated = res.value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe);
  }

  // به جای loginSubject می توانیم از کد زیر نیز استفاده کنیم
  // property get
  // get isAuthenticated() {
  //   return this.loginService.isAuthenticated();
  // }

}
