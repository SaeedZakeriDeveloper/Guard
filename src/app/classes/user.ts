import {IUser} from "../interfaces/iUser";

export class User implements IUser {

  id: number;
  name: string;
  email: string;
  password: string;
  lastname: string;

  constructor(id: number, name: string = '', email: string, password: string, lastname: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.lastname = lastname;
  }
}
