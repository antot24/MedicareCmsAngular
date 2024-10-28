import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Testprescriptionlist } from 'src/app/vmdoctor/testprescriptionlist';

@Component({
  selector: 'app-labresult',
  templateUrl: './labresult.component.html',
  styleUrls: ['./labresult.component.scss']
})
export class LabresultComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router: Router) { }

     //Life Cycle Hook
     ngOnInit(): void {
 // Initialize values if necessary
 this.doctorService.testprescriptionappointmentid = this.doctorService.appointment.AppointmentId; // Example initialization


 // Clear lists of prescriptions when a new appointment is selected
 this.doctorService.testprescriptionslist = [];


       console.log('Hi, I am Testprescription List Component');
   
       //Obbservable method using
       this.doctorService.getAllTestPrescriptionsList().subscribe(
         (data: Testprescriptionlist[]) => {
           this.doctorService.testprescriptionslist = data; //global
         },
         (error) => {
           console.error('Error Fetching Test Prescription list', error)
         }
       )
   
   
   
     }
   

}
