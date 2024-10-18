import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../shared/models/models';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  isUserLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signUp){
    return this.http.post('https://amanvirdhi.github.io/HGS-APIs/db.json', data, { observe: 'response' });
  } 

  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['home'])
    }
  }

  userLogin(data: login) {
    this.http.get('https://amanvirdhi.github.io/HGS-APIs/db.json', { observe: 'response' })
      .subscribe((result: any) => {
        if (result && result.body && result.body.user) {
          const users = result.body.user;
          const foundUser = users.find((user: any) => 
            user.email === data.email && user.password === data.password
          );
          
          if (foundUser) {
            this.isLoginError.emit(false);
            localStorage.setItem('user', JSON.stringify(foundUser));
            this.router.navigate(['home']);
          } else {
            this.isLoginError.emit(true);
          }
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
  

}
