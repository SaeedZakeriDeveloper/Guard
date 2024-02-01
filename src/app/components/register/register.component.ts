import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CanComponentDeactivate } from "../../guards/register.guard";
import { Observable } from "rxjs";
import { User } from 'src/app/classes/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {

  user: User = new User(0, '', '', '', '');
  registerForm!: FormGroup;

  constructor(private userService: UserService, private router: Router, private routes: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastname': new FormControl(null),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.user = new User(0, '', '', '', '');
    this.userService.get().subscribe((users) => {
      if (users.length > 0) {
        // users = [{id: 1, name: 'fa'}, {id: 2, name: 'sa'}] => map => ids = [1, 2]
        let ids = users.map(u => u.id);
        let maxId = Math.max(...ids);
        this.user.id = maxId + 1;
      } else {
        this.user.id = 1;
      }
      this.user.name = this.registerForm.value.name;
      this.user.lastname = this.registerForm.value.lastname;
      this.user.email = this.registerForm.value.email;
      this.user.password = this.registerForm.value.password;

      this.userService.add(this.user).subscribe((res) => {
        alert('success');
        this.registerForm.reset();
        this.router.navigate([''], { relativeTo: this.routes });
      });
    });
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let name = this.registerForm.value.name;
    let lastname = this.registerForm.value.lastname;
    let email = this.registerForm.value.email;
    let password = this.registerForm.value.password;
    if (name || lastname || email || password) {
      if (confirm("Are you sure to exit?")) {
        this.registerForm.reset();
        return true
      }
      else {
        return false
      }
    }
    else {
      return true
    }
  }
}
