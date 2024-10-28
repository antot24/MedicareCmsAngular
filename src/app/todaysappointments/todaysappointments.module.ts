import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodaysappointmentsRoutingModule } from './todaysappointments-routing.module';
import { TodaysappointmentsComponent } from './todaysappointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentConsultComponent } from './appointment-consult/appointment-consult.component';
import { AppointmentMedicineComponent } from './appointment-medicine/appointment-medicine.component';
import { AppointmentTestComponent } from './appointment-test/appointment-test.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestprescriptionListComponent } from './testprescription-list/testprescription-list.component';
import { MedicineprescriptionListComponent } from './medicineprescription-list/medicineprescription-list.component';
import { LabresultComponent } from './labresult/labresult.component';


@NgModule({
  declarations: [TodaysappointmentsComponent, AppointmentListComponent, AppointmentConsultComponent, AppointmentMedicineComponent, AppointmentTestComponent, TestprescriptionListComponent, MedicineprescriptionListComponent, LabresultComponent],
  imports: [
    CommonModule,
    TodaysappointmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],
  exports:[AppointmentListComponent]
})
export class TodaysappointmentsModule { }
