import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { Testprescriptionlist } from 'src/app/vmdoctor/testprescriptionlist';

@Component({
  selector: 'app-appointment-test',
  templateUrl: './appointment-test.component.html',
  styleUrls: ['./appointment-test.component.scss']
})
export class AppointmentTestComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {

     //get all tests

     this.doctorService.getTestInfos();

     this.doctorService.testprecription.AppointmentId = this.doctorService.appointment.AppointmentId; // Example initialization
  }

  // Submit Form
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);

    //call Insert method
    this.insertTestPrescription(form);

    //Reset the form
    //form.reset();
   // this.resetMainprescription(); 

    //Redirect to List
   // this.router.navigate(['/employees/list']);
    //window.location.href='/employees/list'
  }

  //Insert
  insertTestPrescription(form?:NgForm){
    console.log("test Prescription Inserting...");
    this.doctorService.insertTestPrescription(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success('Test Details Added Sccessfully');
        this.resetFormExceptAppointmentId(form);


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
    ),
    (error)=>{
      console.log(error);
      this.toastr.error('Oops...!Something went wrong...!Try Again...');
    }
  }


// Reset Form Except AppointmentId
resetFormExceptAppointmentId(form: NgForm) {
  if (form.controls['TestId']) {
    form.controls['TestId'].setValue('0');                   // Reset TestId dropdown to default option
  }
  if (form.controls['testDoneStatus']) {
    form.controls['testDoneStatus'].setValue(false);         // Reset Test Done Status checkbox to unchecked
  }
  if (form.controls['testReport']) {
    form.controls['testReport'].setValue('');                // Clear Test Report field
  }
  if (form.controls['testValue']) {
    form.controls['testValue'].setValue('');                 // Clear Test Value field
  }
}


}
