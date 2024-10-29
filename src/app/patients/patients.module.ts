import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ConfirmAppointmentComponent } from './confirm-appointment/confirm-appointment.component';


@NgModule({
  declarations: [PatientsComponent, PatientAddComponent, PatientEditComponent, PatientListComponent, BookAppointmentComponent, ConfirmAppointmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    PatientsRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class PatientsModule { }
