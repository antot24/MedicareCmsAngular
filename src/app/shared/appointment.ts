import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {

    AppointmentId:number=0;

    PatientId:number;
   
    DoctorId:number=0;
   
    AppointmentDate:Date;
   
    TokenNumber:number=0;
   
    ConsultationStatus:boolean=false;

    patient? = Patient;
    doctor? = Doctor;
}
