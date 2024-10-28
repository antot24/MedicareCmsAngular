export class PrescriptionViewModel {
    MedicinePrescriptionId: number;
    AppointmentId: number;
    MedicineId: number;
    Dosage?: string;
    Duration?: string;
    Frequency?: string;
    MedicineDispenseStatus?: boolean;
    CreatedDate?: Date;
    TestId: number;
    TestName: string;
    PatientId: number;
    MedicineName: string;
    PatientName: string;
    TestPrescriptionId: number;
    TestDoneStatus?: boolean;
    TestReport?: string;
    TestValue?: string;
}
