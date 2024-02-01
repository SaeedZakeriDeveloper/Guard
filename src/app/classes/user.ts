import {IUser} from "../interfaces/iUser";

// Entity: هر چیزی که بخواهیم دیتای آن را نگه داریم و بر روی آن عملیاتی انجام دهیم
// به ازای هر Entity باید کلاس و اینترفیس آن را بسازیم

// ویژگی های کلاس به شرح زیر می باشد:
// *هر کلاس شامل فیلد و متد است
// *فیلدها حتما باید مقداردهی شوند(یا داخل constructor یا به هنگام تعریف کردن فیلد)
// *زمانی که یک کلاس را new میکنیم، constructor آن کلاس fire می شود
// *همه کلاس ها در درون خودشان constructor دارند و وقتی که ما برای همان کلاس، constructor جدید می نویسیم، constructor جدید override می شود
// *زمانی که یک کلاس را new می کنیم هم constructor خودش fire می شود و هم constructor والدش

// ویژگی های اینترفیس به شرح زیر می باشد:
// *هر اینترفیس می تواند شامل فیلد و متد باشد
// *اینترفیس ها constructor ندارند
// اینترفیس ها را نمی توان new کرد زیرا آن ها constructor ندارند

export class User implements IUser {

  id: number; // this is a field/property value
  name: string; // define a field
  email: string;
  password: string;
  lastname: string = '';

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name; // initial a field
    this.email = email;
    this.password = password;
  }

  // constructor() {
  // }

}

export class Person {
  nationalityCode: string;

  constructor() {
    this.nationalityCode = '';
  }

}

export class Student extends Person {
}

export class Teacher implements IUser {
  email: string = '';
  id: number = 0;
  name: string = '';
  password: string = '';
}
