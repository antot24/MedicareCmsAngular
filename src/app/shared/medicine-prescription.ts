export class MedicinePrescription {
    MedicinePrescriptionId: number = 0;
    AppointmentId: number = 0;
    MedicineId: number = 0;
    Dosage: string = '';
    Duration: string = '';
    Frequency: string = '';
    MedicineDispenseStatus: boolean = false;
    CreatedDate: Date = new Date();

   
}
