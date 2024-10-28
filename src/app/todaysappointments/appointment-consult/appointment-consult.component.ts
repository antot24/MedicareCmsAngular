import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import { DoctorService } from 'src/app/services/doctor.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-appointment-consult',
  templateUrl: './appointment-consult.component.html',
  styleUrls: ['./appointment-consult.component.scss']
})
export class AppointmentConsultComponent implements OnInit {

  age: number;
  constructor(public doctorService: DoctorService,
    private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {


    this.calculateAge(this.doctorService.appointment.Dob); // Calculate age on init

     // Initialize values if necessary
     this.doctorService.mainprecription.AppointmentId = this.doctorService.appointment.AppointmentId; // Example initialization
     this.doctorService.medicineprescriptionappointmentid = this.doctorService.appointment.AppointmentId; // Example initialization
     this.doctorService.testprescriptionappointmentid = this.doctorService.appointment.AppointmentId; // Example initialization
    
    
     this.doctorService.medicineprecription.AppointmentId = this.doctorService.appointment.AppointmentId; // last added
     this.doctorService.testprecription.AppointmentId = this.doctorService.appointment.AppointmentId; // last added


      // Clear lists of prescriptions when a new appointment is selected
      this.doctorService.medicineprescriptionslist = [];
      this.doctorService.testprescriptionslist = [];
  }


  // Submit Form
  //Submit form
  onSubmit(form: NgForm) {
    console.log(form.value);

    //call Insert method
    this.insertMainPrescription(form);

    //Reset the form
   // form.reset();
   // this.resetMainprescription(); 

    //Redirect to List
   // this.router.navigate(['/employees/list']);
    //window.location.href='/employees/list'
  }

  //Insert
  insertMainPrescription(form?:NgForm){
    console.log("Main Prescription Inserting...");

    
    this.doctorService.insertMainPrescription(form.value)
    .subscribe(
      (response)=>{
        console.log(response);
        this.toastr.success('Record has been inserted successfully');
        //this.doctorService.getAllEmployees();

         // Call reset method to clear fields except AppointmentId
      this.resetFormExceptAppointmentId(form);
      }
    ),
    (error)=>{
      console.log(error);
      this.toastr.error('Oops...!Something went wrong...!Try Again...');
    }
  }


  // Reset Form Except AppointmentId
  resetFormExceptAppointmentId(form: NgForm) {
    if (form.controls['symptoms']) {
      form.controls['symptoms'].setValue(''); // Clear Symptoms field
    }
    if (form.controls['diagnosis']) {
      form.controls['diagnosis'].setValue(''); // Clear Diagnosis field
    }
    if (form.controls['doctorsNote']) {
      form.controls['doctorsNote'].setValue(''); // Clear Doctor's Note field
    }
    // Reset additional fields here as needed
  }

// viewLabResults(appointmentId: string) {
//   this.router.navigate(['/labresult', appointmentId]);
// }


calculateAge(dob: string): void {
  if (dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    this.age = age;
  }

}
generatePDF() {
  const data = document.getElementById('pdf-content');
  if (data) {
    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('consultation.pdf');
    });
  }
}

}
