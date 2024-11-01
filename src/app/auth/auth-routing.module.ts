import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';

// import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';


import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { DoctorComponent } from './doctor/doctor.component';

import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},  
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'receptionist', component: ReceptionistComponent},
  {path: 'doctor', component: DoctorComponent},

  {path: 'pharmacist', component: PharmacistComponent},

  //change1
  {path: 'register', component: RegisterComponent},
 

  //{path: 'pharma', component: PharmacistComponent},
  {path: 'labtechnician', component: LabtechnicianComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
