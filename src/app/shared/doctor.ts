import { Specialization } from "./specialization";
import { Staff } from "./staff";

export class Doctor {

    DoctorId: number = 0;
    StaffId: number = 0;
    ConsultationFee: number = 0; 
    SpecializationId: number = 0;

    Specialization: Specialization =new Specialization(); 
    Staff: Staff =new Staff();


}


