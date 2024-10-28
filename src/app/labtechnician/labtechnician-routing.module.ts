import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabAddComponent } from './lab-add/lab-add.component';

import { LabListComponent } from './lab-list/lab-list.component';



const routes: Routes = [
  { path: 'list', component: LabListComponent },
  { path: 'add', component: LabAddComponent },
 
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }