import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  editMode :  boolean  = false
  constructor(private router: Router, private routes: ActivatedRoute, private authService: AuthService ) { }

  

  onRegister() {
    this.router.navigate(['/register'], { relativeTo: this.routes })
    // this.editMode = true
  }
  
  onSignIn(emaill: string, passwordd: string) {
       this.authService.logIn(emaill, passwordd)
  }


  // get editModeAfterSubscribe(){
  //   return this.authService.editMode;
  // }


  ngOnInit(): void {
  }

}
