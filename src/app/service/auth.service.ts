import { Injectable, Output } from '@angular/core';
import { IUser } from '../interfaces/api-interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //CRUD        create     read      update        delete
                 //post    //get    //post/put    //delete

  constructor(private http: HttpClient, private userService: UserService) { }
  url = "http://localhost:3000"

   editMode :  boolean =  false
  // soal inke ma bayad koja az method find estefade konim ?
  // javab inke agar bekhahim az natijeye sub estefade konim faghat va faghat vayad dakhele block subscribe az method find estefade kpnim

    data: BehaviorSubject<any> = new BehaviorSubject('Untouched');
    logIn(emaill: string, passwordd: string) {
   
    let users: IUser[] = [];
   this.userService.get().subscribe((res) => {
      users = res
      let result = users.find(x => x.email === emaill && x.password === passwordd)
      if (result) {
         this.editMode = true 
         this.data.next(true);

         return true
        
      }
      else {
        this.editMode = false
        this.data.next(false)
        return false
      }
    }    
    );
  }






}
