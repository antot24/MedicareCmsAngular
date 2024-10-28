import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctornavbar',
  templateUrl: './doctornavbar.component.html',
  styleUrls: ['./doctornavbar.component.scss']
})
export class DoctornavbarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
  
    this.authService.logOutRemoveItems();

  }

}
