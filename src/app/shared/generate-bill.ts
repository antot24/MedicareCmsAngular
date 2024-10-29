export class MedicineDetails {
    medicineName: string;
    dosage: string;
    duration: string;
    frequency: string;
    medicineDispenseStatus: boolean | null;
    MedicineName: any;
    Dosage: any;
    Duration: any;
    Frequency: any;
  }
  
  export class GenerateBill {
    patientName: string;
    appointmentId: number;
    medicineId:number;
    medicines: MedicineDetails[];
    PatientName: any;
    AppointmentId: any;
    Medicines: any;
  }