import {Component} from '@angular/core';
import {IUser} from 'src/app/interfaces/api-interface';
import {UserService} from 'src/app/service/user.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: IUser = {id: 0, name: '', email: '', password: ''};

  constructor(private userService: UserService, private router: Router, private routes: ActivatedRoute) {
  }

  onAddUser(name: string, email: string, password: string) {
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

}
