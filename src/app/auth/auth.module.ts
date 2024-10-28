import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReceptionistnavbarComponent } from './receptionistnavbar/receptionistnavbar.component';
import { DoctornavbarComponent } from './doctornavbar/doctornavbar.component';
import { PharmacistnavbarComponent } from './pharmacistnavbar/pharmacistnavbar.component';
import { LabtechniciannavbarComponent } from './labtechniciannavbar/labtechniciannavbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TodaysappointmentsModule } from '../todaysappointments/todaysappointments.module';


@NgModule({
  declarations: [AuthComponent, AdminnavbarComponent, NavbarComponent, ReceptionistnavbarComponent, DoctornavbarComponent, PharmacistnavbarComponent, LabtechniciannavbarComponent, HomeComponent, LoginComponent, AdminComponent, ReceptionistComponent, DoctorComponent, PharmacistComponent, LabtechnicianComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    TodaysappointmentsModule
  ]
})
export class AuthModule { }
