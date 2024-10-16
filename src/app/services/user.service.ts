import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { login, signUp } from '../shared/models/models';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
<<<<<<< HEAD
  
=======

>>>>>>> 5019bc5 (changes)
  isUserLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false)
  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signUp){
    return this.http.post('http://localhost:3000/user', data, { observe: 'response' });
  } 

  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['home'])
    }
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
     if(result && result.body && result.body.length===1){
       this.isLoginError.emit(false)
       localStorage.setItem('user',JSON.stringify(result.body))
       this.router.navigate(['home'])
     }else{
       this.isLoginError.emit(true)
     }
    })
   }

}
