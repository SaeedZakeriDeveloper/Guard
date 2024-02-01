import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {CanComponentDeactivate} from "../../guards/register.guard";
import {Observable} from "rxjs";
import {User} from 'src/app/classes/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {

  @ViewChild('name') name: ElementRef | undefined;
  @ViewChild('email') email: ElementRef | undefined;
  @ViewChild('password') password: ElementRef | undefined;
  // user: User = {id: 0, name: '', email: '', password: '', lastname: ''};
  user: User = new User(0, '', '', '', '');
  added : boolean = false
  inputForm! : FormGroup 

  constructor(private userService: UserService, private router: Router, private routes: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.inputForm = new FormGroup ({
      'name' : new FormControl (null,Validators.required ),
      'lastname' : new FormControl (null,Validators.required ) ,
      'email' :  new FormControl (null,Validators.required ),
      'password' :  new FormControl (null,Validators.required ),
})
  }



  onSubmit() {
    this.user = new User(0, '', '', '', '');
    this.userService.get().subscribe((users) => {
      if (users.length > 0) {
        // users= [{id: 1, name: 'fa'}, {id: 2, name: 'sa'}]
        // ids= [1,2];
        let ids = users.map(u => u.id);
        let maxId = Math.max(...ids);
        this.user.id = maxId + 1;
      } else {
        this.user.id = 1;
      }
      this.user.name = this.inputForm.value.name
      this.user.lastname = this.inputForm.value.lastname;
      this.user.email = this.inputForm.value.email
      this.user.password = this.inputForm.value.password

      this.userService.add(this.user).subscribe((res) => {
        alert('success');
        this.added = true
        this.router.navigate([''], {relativeTo: this.routes});
      });
    });
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let name = this.name?.nativeElement.value;
    let email = this.email?.nativeElement.value;
    let password = this.password?.nativeElement.value;
    if ((name || email || password ) && !this.added ) {
      return confirm("Are you sure to exit?");
    } else {
      return true;
    }
  }







}
