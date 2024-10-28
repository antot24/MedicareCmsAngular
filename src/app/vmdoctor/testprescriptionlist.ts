export class Testprescriptionlist {
    // from test prescription
    TestPrescriptionId: number;
    AppointmentId: number;
    TestId: number;
    TestDoneStatus?: boolean;
    TestReport: string; // Ensure proper casing
    TestValue: string; // Ensure proper casing
    CreatedDate: Date;

    // from test info
    TestName: string;
    TestType: string;
    Category: string;

    // From Patient
    PatientId: number;
    PatientName: string;
    Dob: Date;
    Gender: string;
    BloodGroup: string;
}
