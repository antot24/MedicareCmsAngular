// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
// import { PharmacistComponent } from './auth/pharmacist/pharmacist.component';

// const routes: Routes = [
//   //Empty Route
// {path:'',redirectTo:'auth/login', pathMatch:'full'},

// //Authentication /Authorization
// {
//   path: 'auth', component: AuthComponent, 
//   loadChildren: () =>
//     import('./auth/auth.module')
//       .then(x => x.AuthModule)
// },
// {
//   path: 'pharma', component:PharmacistComponent,
//   loadChildren: () =>
//     import('./pharmacists/pharmacists.module')
//   .then(x => x.PharmacistsModule)
// },

// //You can add other Parent components below, like above   -- lazy loading for best performance

// //Wild Card Route
// {path:'**',redirectTo:'auth/pagenotfound', pathMatch:'full'}

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

// import { LabtechnicianComponent } from './labtechncian/labtechncian.component';

import { TodaysappointmentsComponent } from './todaysappointments/todaysappointments.component';


const routes: Routes = [
  // Redirect empty path to 'auth/login'
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },


  // Lazy load the 'auth' module
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module')
        .then(m => m.AuthModule)
  },


// Todays Appointment Module
{
  path: 'appointments',component:TodaysappointmentsComponent,
  loadChildren: () =>
    import('./todaysappointments/todaysappointments.module')
      .then(x => x.TodaysappointmentsModule)
},


//You can add other Parent components below, like above   -- lazy loading for best performance


  // Lazy load the 'pharmacist' (Pharmacists) module
  {
    path: 'pharmacist',
    loadChildren: () =>
      import('./pharmacists/pharmacists.module')
        .then(m => m.PharmacistsModule)
  },

  // {
  //   path:'labtechncian',
  //   loadChildren:()=>
  //     import('./labtechnician/labtechnician.module')
  //   .then(m =>m.LabtechnicianModule)
  // },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

