import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient'; // Import the Patient model if applicable
import { ReceptionistService } from 'src/app/services/receptionist.service'
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  searchTerm: string = '';
  page: number = 1;

  
  filteredPatients: Patient[] = [];  // Filtered patients array
    // Two-way binding to capture search input

  constructor(public receptionistService:ReceptionistService
    ,private router: Router) { }

  ngOnInit(): void {
    console.log('Hi, I am Patient List Component');
    //this.employeeService.getAllEmployees();//promise
    this.receptionistService.getAllPatient().subscribe(

      (data: Patient[]) => {
        console.log("enter")
        this.receptionistService.patients= data;//global
        this.filteredPatients = data; //component
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    )
   
  }

  //Search patient by name or phone number
  filterPatients(): void {
    const term = this.searchTerm.toLowerCase()
    this.filteredPatients = this.receptionistService.patients.filter(patient => 
      patient.PatientName.toLowerCase().includes(term) || patient.PhoneNumber.includes(term) 
    );
  }
  //Edit Employee
  editPatient(patient: Patient): void {
    console.log(patient);
    //keep employee object
    this.receptionistService.patient = Object.assign({}, patient);
    this.router.navigate(['/patients/edit', patient.PatientId]);
  }

  bookAppointment(patientId): void {
    console.log("patientId"+patientId);
    //keep employee object
    this.receptionistService.patient = Object.assign({}, patientId);
    this.router.navigate(['/patients/bookAppointment',patientId]);
  }
  



}