import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PatientsComponent } from './patients/patients.component';




const routes: Routes = [
  //Empty Route
{path:'',redirectTo:'patients/patient-list', pathMatch:'full'},

//Authentication /Authorization
{
  path: 'patients', component: PatientsComponent, 
  loadChildren: () =>
    import('./patients/patients.module')
      .then(x => x.PatientsModule)
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
