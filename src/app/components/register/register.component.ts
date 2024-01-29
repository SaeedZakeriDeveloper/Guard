import {Component} from '@angular/core';
import {IUser} from 'src/app/interfaces/api-interface';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: IUser = {id: 0, name: '', email: '', password: ''};

  constructor(private userService: UserService) {
  }

  onAddUser(name: string, email: string, password: string) {
    this.user.id = 0;
    this.user.name = name;
    this.user.email = email;
    this.user.password = password;

    this.userService.add(this.user).subscribe((res) => {
        if (res == true) {
          alert('success')
        } else {
          alert("Error")
        }
      }
    )

  }
}







