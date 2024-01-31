import { IUser } from "../interfaces/iUser";


export class User implements IUser {
    id: number;
    name: string;
    email: string;
    password: string;


    constructor(idd: number, namee: string = '', emaill: string, passwordd: string) {
        this.id = idd
        this.name = namee
        this.email = emaill
        this.password = passwordd
    }
}

export class Person {
    Id: number;
    LastName: string;
    constructor(id: number, lastName: string) {
        this.Id = id;
        this.LastName = lastName;
    }
}



//entity   
//interface   //service    //class   //IService

// dar interface bayad tak tak  property va methood ha baydddd implement beshan 
// dar  sorati ke dar class ekhtiyari ast yani optional 


//dar interface constructor nadard vali class bayad dashte bashad
//


// export class Student implements  IUser{
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     constructor(Id: number, Name: string, Email: string, Password: string){
//         this.id=Id;
//         this.name=Name;
//         this.email=Email;
//         this.password=Password;
//     }
// }





export class Teacher implements IUser{
    id: number;
    name: string;
    email: string;
    password: string;
        constructor(Id: number, Name: string, Email: string, Password: string){
        this.id=Id;
        this.name=Name;
        this.email=Email;
        this.password=Password;
    }
}

export class Student extends Person{
constructor(){
    super(0,'');
    
}

}
