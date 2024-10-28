import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { StaffsComponent } from './staffs/staffs.component';
import { DoctorsComponent } from './staffs/doctors.component';
import { DoctorComponent } from './auth/doctor/doctor.component';

const routes: Routes = [
  //Empty Route
{path:'',redirectTo:'auth/login', pathMatch:'full'},



//check requestparam method trial --reshmi
//{ path: 'staffs/docadd/:staffId', component: DoctorsComponent },

//Authentication /Authorization
{
  path: 'auth', component: AuthComponent, 
  loadChildren: () =>
    import('./auth/auth.module')
      .then(x => x.AuthModule)
},

//Staffs -- lazy loading
{path:'staffs',component:StaffsComponent,
  loadChildren: () => 
   import('./staffs/staffs.module')
    .then(x=>x.StaffsModule)
},


//doctors--lazy loading
{path:'doctors',component:DoctorsComponent,
  loadChildren: () => 
   import('./staffs/staffs.module')
    .then(x=>x.StaffsModule)
},


//register component to register user

//Wild Card Route
{path:'',redirectTo:'auth/pagenotfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }