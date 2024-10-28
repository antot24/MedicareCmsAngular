import { Injectable } from '@angular/core';
import { Appointmentview } from '../vmdoctor/appointmentview';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // Ensure tap is imported from rxjs/operators

import { environment } from 'src/environments/environment';
import { Doctor } from '../shared/doctor';
import{Medicineinfoview} from '../vmdoctor/medicineinfoview';
import{Testinfoview} from '../vmdoctor/testinfoview';
import{Mainprescriptionview} from '../vmdoctor/mainprescriptionview';
import{Medicineprescriptionview} from '../vmdoctor/medicineprescriptionview';
import{Testprescriptionview} from '../vmdoctor/testprescriptionview';
import{Medicineprescriptionlist} from '../vmdoctor/medicineprescriptionlist';
import{Testprescriptionlist} from '../vmdoctor/testprescriptionlist';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //appointment object for listing todays appointment
  appointment: Appointmentview = new Appointmentview();
  // appointments array for listing todays appointments
  appointments: Appointmentview[] = []; // Initialize as an empty array

  doctor: Doctor = new Doctor();

  //Main Prescription object to insert main prescription
  mainprecription:Mainprescriptionview =new Mainprescriptionview();

  //Medicine prescription object to insert
  medicineprecription:Medicineprescriptionview =new Medicineprescriptionview();

  // Medicine info object for getting medicine ddetails
  medicineinfo:Medicineinfoview=new Medicineinfoview();  ///

  //medicineinfos array for getting List of medicines
  medicineinfos: Medicineinfoview[]=[];


  // Test prescription object for insert test prescription
  testprecription:Testprescriptionview =new Testprescriptionview();

  // testinfo:Testinfoview=new Testinfoview();  //
  // List of tests
  testinfos:Testinfoview[]=[];
  

  // list of Medicine prescriptions aded
  medicineprescriptionslist:Medicineprescriptionlist []=[];
 // medicineprescriptionlist:Medicineprescriptionlist=new Medicineprescriptionlist(); //


  // list of test Prescriptions added
  testprescriptionslist:Testprescriptionlist []=[];
 // testprescriptionlist:Testprescriptionlist=new Testprescriptionlist();  //


  constructor(private httpClient: HttpClient) {
  }
  doctorId=2;
  medicineprescriptionappointmentid:number;
  testprescriptionappointmentid:number;

  //1. Get Today's Appointments - Observable Types
  getAllTodaysAppointmentsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'doctors/todaysappointmentsvm/'+this.doctorId);
  }

// Get Medicine info

  getMedicineInfos(): void {
    this.httpClient.get(environment.apiUrl + 'doctors/medicineinfos')
      .toPromise()
      .then(
        (response) => {

          console.log(response);
          this.medicineinfos = response as Medicineinfoview[];
        },
        (error) => {
          console.log(error);
        }

      );
  }
 

  // Get list of test information

  getTestInfos(): void {
    this.httpClient.get(environment.apiUrl + 'doctors/testinfos')
      .toPromise()
      .then(
        (response) => {

          console.log(response);
          this.testinfos= response as Testinfoview[];
        },
        (error) => {
          console.log(error);
        }

      );
  }


   //Insert Insert Mainain prescription 
   insertMainPrescription(mainprescription: Mainprescriptionview): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'doctors/mainprescription', mainprescription);
  }



  // Insert medicine prescription
     insertMedicinePrescription(medicineprescription: Medicineprescriptionview): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'doctors/medicineprescription', medicineprescription);
     }

  // Insert test prescription
  insertTestPrescription(testprescription: Testprescriptionview): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'doctors/testprescription', testprescription);
     }

 // Get All Medicine Prescription - Observable Types
 getAllMedicinePrescriptionsList(): Observable<any> {
  return this.httpClient.get(environment.apiUrl + 'doctors/medicineprescriptions/'+this.medicineprescriptionappointmentid);
}

 // Get All Test Prescription - Observable Types
 getAllTestPrescriptionsList(): Observable<any> {
  return this.httpClient.get(environment.apiUrl + 'doctors/testprescriptions/'+this.testprescriptionappointmentid);
}

// Get Doctor ID by Staff ID
// getDoctorIdByStaffId(staffId: number): Observable<number> {
//   const url = `${environment.apiUrl}doctors/staff/${staffId}`; // Adjust the endpoint as per your API
//   return this.httpClient.get<number>(url).pipe(
//     tap((id) => {
//       this.doctorId = id; // Save the fetched doctor ID in the service layer
//       console.log('Fetched Doctor ID:', this.doctorId); // Optional: Log the fetched doctor ID
//     }),
//     catchError((error) => {
//       console.error('Error fetching doctor ID:', error);
//       return throwError(error); // Handle the error appropriately
//     })
//   );
// }


  // Get patient history by ID
  getPatientHistory(id: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}doctors/patienthistory/${id}`);
  }

  // Delete a medicine prescription by ID
  deleteMedicinePrescription(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}doctors/medicineprescription/${id}`);
  }

  // Delete a test prescription by ID
  deleteTestPrescription(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}doctors/testprescription/${id}`);
  }

 
}
