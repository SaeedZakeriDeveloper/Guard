import {IUser} from "../interfaces/iUser";

// انتیتی : هر چیزی که بخواهیم دیتای آن را نگه داریم و بر روی آن عملیاتی انجام دهیم
// به ازای هر انتیتی باید کلاس و اینترفیس آن را بسازیم

// ویژگی های کلاس به شرح زیر می باشد:
// *هر کلاس شامل فیلد و متد است
// *فیلدها حتما باید مقداردهی شوند(یا داخل کانستراکتور یا به هنگام تعریف کردن فیلد)
// *زمانی که یک کلاس را نیو میکنیم، کانستراکتور آن کلاس فایر می شود
// *همه کلاس ها در درون خودشان کانستراکتور دارند و وقتی که ما برای همان کلاس، کانستراکتور جدید می نویسیم، کانستراکتور جدید آورراید می شود
// *زمانی که یک کلاس را نیو می کنیم هم کانستراکتور خودش فایر می شود و هم کانستراکتور والدش

// ویژگی های اینترفیس به شرح زیر می باشد:
// *هر اینترفیس می تواند شامل فیلد و متد باشد
// *اینترفیس ها کانستراکتور ندارند
// اینترفیس ها را نمی توان نیو کرد زیرا آن ها کانستراکتور ندارند

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
