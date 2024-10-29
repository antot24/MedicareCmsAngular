import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient';
import { Doctor } from '../shared/doctor';
import{Appointment} from'../shared/appointment';
import{AppointmentViewModel} from'../shared/appointment-view-model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Specialization } from '../shared/specialization';



@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  //declare variable - global variable

  patient: Patient = new Patient();

  //List of patient
  patients: Patient[];

  appointment: Appointment = new Appointment();
  appointments: Appointment[];


  //List of doctors

  doctor: Doctor = new Doctor();
  doctors: Doctor[];

  //List of specializations

  special: Specialization= new Specialization();
  specials: Specialization[];

  appointmentViewModel:AppointmentViewModel=new AppointmentViewModel();
  appointmentViewModels:AppointmentViewModel[];


  constructor(private httpClient: HttpClient) { } //get,post,put,delete

//1 Get all Patients-promises

getAllPatients(): void {
  this.httpClient.get(environment.apiUrl + '/Receptionists/patients')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.patients = response as Patient[];
      },
      (error) => {
        console.log(error);
      }
    )
}

//2-Get all Patients- Observable types
getAllPatient(): Observable<any> {
  return this.httpClient.get(environment.apiUrl + '/Receptionists/patients');
}

 // 3 -Insert patient
 insertPatient(patient: Patient): Observable<any>{
  return this.httpClient.post(environment.apiUrl+ '/Receptionists/Id',patient);
}

updatePatient(patient: Patient): Observable<any> {
  const url = `${environment.apiUrl}/Receptionists/edit`;
  return this.httpClient.put(url, patient);
}
// 5- Get Specializations

 // Fetch all specializations
 //----------------------------------------
//  getAllSpecializations(): Observable<any[]> {
//   return this.httpClient.get<any[]>(`${environment.apiUrl}/Receptionists/specialization`);
// }
 // Method to retrieve doctor names by specialization name
 //getDoctorsBySpecialization(specializationId: number): Observable<Doctor[]> {
 // return this.httpClient.get<Doctor[]>(`${environment.apiUrl}/Receptionists/specialization/id/${specializationId}`);
//}

//-----------------------------------------------------------------------------------------

// getDoctorsBySpecialization(specializationId: number): void {
//   console.log("SpecializationId is" + specializationId);
//   this.httpClient.get(environment.apiUrl + '/Receptionists/doctors/' + specializationId)
//     .toPromise()
//     .then(
//       (response) => {
//         console.log(response)
//         this.doctors = response as Doctor[];

//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//}


getAllDoctor(): void {

  this.httpClient.get(environment.apiUrl + '/api/Patient/dep')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.doctors = response as Doctor[];

      },
      (error) => {
        console.log(error);
      }
    );

}


getAllSpecialization(): void {
  console.log("open")
  this.httpClient.get(environment.apiUrl + '/Receptionists/specialization')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.specials = response as Specialization[];
      },
      (error) => {
        console.log(error);
      }
    );

}






getDoctorsBySpecialization(specializationId: number): void {
  console.log("specializationIds" + specializationId);
  this.httpClient.get(environment.apiUrl + '/Receptionists/doctors/' + specializationId)
    .toPromise()
    .then(
      (response) => {
        console.log(response)
        this.doctors = response as Doctor[];

      },
      (error) => {
        console.log(error);
      }
    );

}








  // 7 - Book Appointment
  addAppointment(appointment: AppointmentViewModel): Observable<any> {
    return this.httpClient.post(environment.apiUrl +'/Receptionists/book',appointment);
}

// 8- Get Appointment by Id
getAppointmentById(AppointmentId: number): void {
  console.log("AppointmentId: " + AppointmentId);
  
  this.httpClient.get(environment.apiUrl + '/Receptionists/apid/' + AppointmentId)
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.appointments = response as Appointment[]; // Correctly placed in the success handler
      },
      (error) => {
        console.log(error);
      }
    );
}






}
