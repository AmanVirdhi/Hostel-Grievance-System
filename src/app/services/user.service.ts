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

  // userSignUp(data:signUp){
  //   this.http.
  //   post('http://localhost:3000/user',data, {observe:'response'})
  //   .subscribe((result)=>{
  //       this.isUserLoggedIn.next(true); 
  //       localStorage.setItem('user', JSON.stringify(result.body))
  //       this.router.navigate(['home']);
  //   });
  // } 
  userSignUp(data:signUp){
    return this.http.post('http://localhost:3000/user', data, { observe: 'response' });
  } 

  reloadUser(){
    if(localStorage.getItem('user')){
      this.isUserLoggedIn.next(true)
      this.router.navigate(['home'])
    }
  }

  // userLogin(data:login){
  //   return this.http.post('http://localhost:3000/user', data, { observe: 'response' });
  // } 

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
  // userLogin(data: login) {
  //   this.http
  //     .get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`, {
  //       observe: 'response',
  //     })
  //     .subscribe(
  //       (result: any) => {
  //         console.warn(result); // Debugging the entire response
  //         if (result && result.body && Array.isArray(result.body) && result.body.length === 1) {
  //           this.isLoginError.emit(false);
  //           localStorage.setItem('user', JSON.stringify(result.body)); // Ensure to store the user object properly
  //           this.router.navigate(['home']);
  //         } else {
  //           console.warn("Login failed. No matching user found.");
  //           this.isLoginError.emit(true);
  //         }
  //       },
  //       (error) => {
  //         console.error("Error occurred during login:", error); // Handling server or HTTP errors
  //         this.isLoginError.emit(true);
  //       }
  //     );
  // }

}
