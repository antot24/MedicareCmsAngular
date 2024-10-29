// src/app/shared/prescription-details-view-model.ts
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

export class PrescriptionDetailsViewModel {
  patientName: string;
  appointmentId: number;
  medicineId:number;
  medicines: MedicineDetails[];
  PatientName: any;
  AppointmentId: any;
  Medicines: any;
}
