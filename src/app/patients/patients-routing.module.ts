import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientAddComponent} from './patient-add/patient-add.component';
import {PatientEditComponent} from './patient-edit/patient-edit.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ConfirmAppointmentComponent } from './confirm-appointment/confirm-appointment.component';

const routes: Routes = [

  //employees-list : https:/localhost:4200/employees/list
  {path:'list', component:PatientListComponent},
  //employees-add : https:/localhost:4200/employees/add
  {path:'add', component: PatientAddComponent},
 //employees-edit : https:/localhost:4200/employees/edit
  {path:'edit/:id', component: PatientEditComponent},

  {path:'bookAppointment/:id',component:BookAppointmentComponent},

  { path: 'patients/confirm-appointment', component: ConfirmAppointmentComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
