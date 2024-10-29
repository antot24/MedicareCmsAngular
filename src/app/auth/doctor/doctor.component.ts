import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';  // Import your service
import { Appointmentview } from 'src/app/vmdoctor/appointmentview';  // Import Appointment model

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }



  
}
