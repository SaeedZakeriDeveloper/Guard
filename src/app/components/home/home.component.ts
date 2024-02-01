import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from 'src/app/service/login.service';
import {Observable, Subscription} from "rxjs";
import {IUser} from "../../interfaces/iUser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  loggedIn: boolean = false;
  // Holds array of subscriptions made during component lifetime.
  subscriptions: Subscription[] = [];
  // Store profile observable which we can display after login.
  profile: Observable<IUser | undefined> = this.loginService.userProfileBehaviorSubject;

  constructor(private router: Router, private routes: ActivatedRoute, private loginService: LoginService) {
  }



  ngOnInit(): void {
    // Add subscription to subscriptions array
    this.subscriptions.push(
      // listen for login success/error
      this.loginService.loginSubject.subscribe((result: any) => {
        this.loggedIn = result.value;
        if(result.event ==  'login') {    //nemidonestim next ke dare sub mishe az login hast ya logout
          let loginMessage = result.value ? 'Login was successful' : 'Error logging in';
          alert(loginMessage);
        }
      })
    );
  }


  


  onRegister() {
    this.router.navigate(['/register'], {relativeTo: this.routes});
  }



  onSignIn(email: string, password: string) {
    this.loginService.login(email, password);
  }


  ngOnDestroy(): void {
    // When component is destroyed, it is important to clean up subscriptions.
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
