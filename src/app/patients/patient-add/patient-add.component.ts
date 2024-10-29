import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  PatientName: string;
  DOB: Date;
  PhoneNumber: string;
  maxDate: string;
  minDate: string;

  // Method to check if the date is in the future

  constructor(public receptionistservice:ReceptionistService,private router:Router,private toastr:ToastrService) { }

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
        this.addPatient(form);

        // Optionally reset Form
        form.reset();
    } else {
        // Handle invalid form case
        console.error('Form is invalid, please correct the errors.');
        // You could also provide user feedback here, like showing an alert or message
    }



//Redirect to list
this.router.navigate(['/patients/list'])
  }
  isFutureDate(dateString: Date): boolean {
    const today = new Date();
    const selectedDate = new Date(dateString);
    return selectedDate > today;
}

  // Insert
  addPatient(form?: NgForm){
    console.log("Inserting....");
    this.receptionistservice.insertPatient(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success('Record has been inserted successfully','MEDICARE')
        this.receptionistservice.getAllPatient();
      },
      (error)=>{
        console.log(error);
        this.toastr.error('Oops! Something wrong, try again','MEDICARE')
      }
    )
  }

}
