import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';

const routes: Routes = [
//edited by reshmi

{ path: 'list', component: StaffListComponent },
  { path: 'add', component: StaffAddComponent },
  { path: 'edit/:id', component: StaffEditComponent },
  {path: 'docadd/:id',component:DoctorAddComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
