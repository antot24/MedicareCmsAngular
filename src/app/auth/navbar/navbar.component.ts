import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: string ="";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("Username").toString();
  }
// LogOut()
logOut(){
  this.authService.logOutRemoveItems();
}
}