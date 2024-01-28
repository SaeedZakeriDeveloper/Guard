import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/api-interface';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: IUser = { name: '', email: '', password: '' , id: 0}

  constructor(private userService: UserService) {
  }

  onAddUser(namee: string, eamill: string, passwordd: string) {
      this.user.id = 0   //Osole Barname nevisi
      this.user.name = namee,
      this.user.email = eamill,
      this.user.password = passwordd


    this.userService.add(this.user).subscribe((res) => {
      if (res == true) {
        alert('success')
      }
      else {
        alert("Error")
      }
    }
    )

  }
}







