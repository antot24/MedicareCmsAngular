import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodaysappointmentsComponent } from './todaysappointments/todaysappointments.component';

const routes: Routes = [
  //Empty Route
{path:'',redirectTo:'auth/login', pathMatch:'full'},

//Authentication /Authorization
{
  path: 'auth', component: AuthComponent, 
  loadChildren: () =>
    import('./auth/auth.module')
      .then(x => x.AuthModule)
},


// Todays Appointment Module
{
  path: 'appointments',component:TodaysappointmentsComponent,
  loadChildren: () =>
    import('./todaysappointments/todaysappointments.module')
      .then(x => x.TodaysappointmentsModule)
},


//You can add other Parent components below, like above   -- lazy loading for best performance

//Wild Card Route
{path:'**',redirectTo:'auth/pagenotfound', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
