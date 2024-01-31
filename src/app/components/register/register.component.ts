import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import {CanComponentDeactivate} from "../../guards/register.guard";
import {Observable} from "rxjs";
import {User} from 'src/app/classes/user';

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

  constructor(private userService: UserService, private router: Router, private routes: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onAddUser(name: string, email: string, password: string) {
    this.user = new User(0, '', '', '', '');
    this.userService.get().subscribe((users) => {
      if (users.length > 0) {
        let ids = users.map(u => u.id);
        let maxId = Math.max(...ids);
        this.user.id = maxId + 1;
      } else {
        this.user.id = 1;
      }
      this.user.name = name;
      this.user.email = email;
      this.user.password = password;

      this.userService.add(this.user).subscribe((res) => {
        alert('success');
        this.router.navigate([''], {relativeTo: this.routes});
      });
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let name = this.name?.nativeElement.value;
    let email = this.email?.nativeElement.value;
    let password = this.password?.nativeElement.value;
    if (name || email || password) {
      return confirm("Are you sure to exit?");
    } else {
      return true;
    }
  }

}
