import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService,IndividualConfig } from 'ngx-toastr';

import { DoctorService } from 'src/app/services/doctor.service';
import { Medicineprescriptionlist } from 'src/app/vmdoctor/medicineprescriptionlist';

@Component({
  selector: 'app-appointment-medicine',
  templateUrl: './appointment-medicine.component.html',
  styleUrls: ['./appointment-medicine.component.scss']
})
export class AppointmentMedicineComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
      //get all medicines



      this.doctorService.getMedicineInfos();
      


    this.doctorService.medicineprecription.AppointmentId = this.doctorService.appointment.AppointmentId; // Example initialization
    

  }

 // Submit Form
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);

    //call Insert method
    this.insertMedicinePrescription(form);

    //Reset the form
   // form.reset();
    
    
   // this.resetMainprescription(); 

    //Redirect to List
   // this.router.navigate(['/employees/list']);
    //window.location.href='/employees/list'
    
  }

  //Insert
  insertMedicinePrescription(form?:NgForm){
    console.log("Medicine Prescription Inserting...");
    this.doctorService.insertMedicinePrescription(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success('Medicine Added Successfully');

  // Clear the form fields except AppointmentId
  this.resetFormExceptAppointmentId(form);

        //Obbservable method using
    this.doctorService.getAllMedicinePrescriptionsList().subscribe(
      (data: Medicineprescriptionlist[]) => {
        this.doctorService.medicineprescriptionslist = data; //global
      },
      (error) => {
        console.error('Error Fetching Medicine Prescription list', error)
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
  if (form.controls['MedicineId']) {
    form.controls['MedicineId'].setValue('0');                // Reset MedicineId to default option
  }
  if (form.controls['dosage']) {
    form.controls['dosage'].setValue('');                     // Clear Dosage field
  }
  if (form.controls['duration']) {
    form.controls['duration'].setValue('');                   // Clear Duration field
  }
  if (form.controls['frequency']) {
    form.controls['frequency'].setValue('');                  // Clear Frequency field
  }
  if (form.controls['medicineDispenseStatus']) {
    form.controls['medicineDispenseStatus'].setValue(false);  // Reset checkbox to unchecked
  }
}


}
