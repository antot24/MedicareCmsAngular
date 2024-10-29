import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {

// <<<<<<< Receptionist
//     AppointmentId:number=0;

//     PatientId:number;
   
//     DoctorId:number=0;
   
//     AppointmentDate:Date;
   
//     TokenNumber:number=0;
   
//     ConsultationStatus:boolean=false;

//     patient? = Patient;
//     doctor? = Doctor;
  
    AppointmentId: number = 0;
    PatientId: number = 0;
    DoctorId: number = 0;
    AppointmentDate: Date=new Date; 

    // AppointmentDate: string = ''; // Use string for date; consider Date type if needed
    TokenNumber: number = 0;
    ConsultationStatus: boolean = false;

    //Object oriented Model
    Doctor: Doctor = new Doctor(); 
    Patient: Patient = new Patient(); 

    constructor() {
        // Optional constructor logic can be added here
    }

}
