import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  //LogOut
  public logOutRemoveItems(){
    // clear all sessions and localstorage keys

    localStorage.removeItem("USER_NAME");
    sessionStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");

    //REDIRECT TO LOGIN

    this.router.navigate(['auth/login']);

  }
}
