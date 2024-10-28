import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentConsultComponent } from './appointment-consult/appointment-consult.component';
import { AppointmentMedicineComponent } from './appointment-medicine/appointment-medicine.component';
import { AppointmentTestComponent } from './appointment-test/appointment-test.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { MedicineprescriptionListComponent } from './medicineprescription-list/medicineprescription-list.component';
import { TestprescriptionListComponent } from './testprescription-list/testprescription-list.component';
import { LabresultComponent } from './labresult/labresult.component';

const routes: Routes = [
   //todaysappointment-list : https://localhost:4200/appointments/list
   { path: 'list', component: AppointmentListComponent },
   //appointments-consult : https://localhost:4200/appointments/consult
   { path: 'consult/:id', component: AppointmentConsultComponent },
 
   //appointments-medicine: https://localhost:4200/appointments/medicine
   { path: 'medicine', component: AppointmentMedicineComponent },

    //appointments-test: https://localhost:4200/appointments/test
    { path: 'test', component: AppointmentTestComponent },

    { path: 'medicineprescriptions', component: MedicineprescriptionListComponent },

    { path: 'testprescriptions', component: TestprescriptionListComponent },

    { path: 'labresult/:Id', component: LabresultComponent }


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodaysappointmentsRoutingModule { }
