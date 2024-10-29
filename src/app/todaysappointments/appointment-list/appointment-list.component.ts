import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Appointmentview } from 'src/app/vmdoctor/appointmentview';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  // Declare variables
  searchTerm: string = '';
  page: number = 1;

  //use this for filtered todaysappointments
  filteredTodaysAppointments: Appointmentview[] = [];
  
  //Inject Service and Router

  constructor(public doctorService: DoctorService,
    private router: Router
  ) { }

  //Life Cycle Hook
  ngOnInit(): void {

    
    console.log('Hi, I am todaysappointment List Component');

    //Obbservable method using
    this.doctorService.getAllTodaysAppointmentsList().subscribe(
      (data: Appointmentview[]) => {
        this.doctorService.appointments = data; //global
        this.filteredTodaysAppointments = data;         //component
      },
      (error) => {
        console.error('Error Fetching TodaysAppointments', error)
      }
    )
  }

  //Method to fliter todaysappointments based on searchTerm
  filterTodaysAppointments():void{
    const term=this.searchTerm.toLowerCase()
    this.filteredTodaysAppointments=this.doctorService.appointments.filter(
      appointment=>
        appointment.PatientName.toLowerCase().includes(term) ||
      appointment.TokenNumber.toString().includes(term) 
                // Convert TokenNumber to string and check if it contains the search term
               // || appointment.AppointmentId.toString().includes(term) 
    );
  }




   //Consult Appointment
   consultPatient(appointment: Appointmentview): void {
    console.log(appointment);
    //Keep appointment object in service
    this.doctorService.appointment = Object.assign({}, appointment);
    this.router.navigate(['/appointments/consult', appointment.AppointmentId]);
    // localhost:4200/appointments/consult/id

  }

  viewLabReport(appointment:Appointmentview): void {
    this.doctorService.appointment = Object.assign({}, appointment);

    // Navigate to the labresult component
    this.router.navigate(['/appointments/labresult',appointment.AppointmentId]);
  }

  
}
