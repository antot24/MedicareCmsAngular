import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot):boolean {

      //checking surrent role and expected role
      //current rrole frm local storage 

      const currentRole=localStorage.getItem("ACCESS_ROLE");

      const expectedRole=next.data.role;


      //oif mstch => true,show the authorized page
      //else redirect to login paage

      if(currentRole !==expectedRole){
        localStorage.removeItem("USER_NAME");
        sessionStorage.removeItem("USER_NAME");
        localStorage.removeItem("ACCESS_ROLE");
        localStorage.removeItem("JWT_TOKEN");
        this.router.navigate(['auth/login']);
       
      }
      return true;

    }
    
   
  }
  
