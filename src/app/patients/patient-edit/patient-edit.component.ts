import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ReceptionistService} from 'src/app/services/receptionist.service'

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {

  PhoneNumber: string;
  maxDate: string;
  minDate: string;


  constructor(public receptionistservice:ReceptionistService,private router:Router) { }

  ngOnInit(): void {
    const today = new Date();
        
        // Set max date to today's date
        this.maxDate = today.toISOString().split('T')[0];

        // Set min date to 130 years ago from today
        const minDate = new Date(today);
        minDate.setFullYear(today.getFullYear() - 130);
        this.minDate = minDate.toISOString().split('T')[0];
  }

   // Submit Form
onSubmit(form: NgForm) {
  // Check if the form is valid before proceeding
  if (form.valid) {
      console.log(form.value); // Log the form values
      
      // Call Insert method
      this.updatePatient(form);
      
      // Reset Form
      form.reset();

      // Navigate to the patient list
      this.router.navigate(['/patients/list']);
  } else {
      // Handle invalid form case
      console.error('Form is invalid, please correct the errors.');
      // You could provide user feedback here, like showing an alert or message
  }
}

      isFutureDate(dateString: Date): boolean {
        const today = new Date();
        const selectedDate = new Date(dateString);
        return selectedDate > today;
    }
      // Insert
      updatePatient(form?: NgForm){
        console.log("Updating....");
        this.receptionistservice.updatePatient(form.value)
        .subscribe(
          (response)=>{
            console.log(response);
          },
          (error)=>{
            console.log(error);
          }
        )
      }

}