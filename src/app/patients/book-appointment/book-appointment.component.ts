import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  patientId: number = 0; // Store patient ID
  today: string; // Variable to hold today's date in 'YYYY-MM-DD' format

  
   


  constructor( public receptionistservice: ReceptionistService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute //Inject ActivatedRoute to get route parameters
) {}

  // ngOnInit(): void {
  //   this.receptionistservice.getAllSpecializations();
  // }

  ngOnInit(): void {
    //Get PatientId from the route parameters
    this.route.paramMap.subscribe(params => {
      this.patientId = +params.get('id')!; 
      this.receptionistservice.appointmentViewModel.PatientId = this.patientId; // Store in the appointment view model
    });

     // Set today's date in 'YYYY-MM-DD' format for the input
     const todayDate = new Date();
     this.today = todayDate.toISOString().split('T')[0]; // Format to 'YYYY-MM-DD'

     // Set the current appointment date
     this.setCurrentAppointmentDate();
    
    this.receptionistservice.getAllSpecialization();
  }

  // Set the current date for AppointmentDate
  setCurrentAppointmentDate() {
    const today = new Date(); // This creates a Date object representing the current date
    this.receptionistservice.appointmentViewModel.AppointmentDate = today; // Assign the Date object directly
}




   // Called when the specialization is changed
   onSpecializationChange(event: any): void {
    const specializationId = event.target.value;
    if (specializationId) {
      console.log("specializationId: " + specializationId);
      this.receptionistservice.getDoctorsBySpecialization(specializationId);
    }
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    // Call Insert method
    var appointment = this.addAppointment(form);

    // Navigate to confirm appointment page
    this.router.navigate(['patients/confirm-appointment']);

    // // Reset Form
    console.log(appointment)
   
    form.reset();   
  }

// Insert
addAppointment(form?: NgForm) {
  console.log("Inserting....");
  // Auto-generate TokenNumber and ConsultationStatus on the server side
  this.receptionistservice.addAppointment(form.value)
    .subscribe(
      (response) => {
        console.log(response.appointmentId);
        this.toastr.success('Appointment booked successfully', 'MEDICARE');
       
        
      },
      (error) => {
        console.log(error);
        this.toastr.error('Oops! Something went wrong, try again', 'MEDICARE');
      }
      );
  }


}
