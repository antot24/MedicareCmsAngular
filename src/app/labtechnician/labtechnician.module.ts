import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
 import { LabListComponent } from './lab-list/lab-list.component'; 
 import { LabAddComponent } from './lab-add/lab-add.component';
 import { LabEditComponent } from './lab-edit/lab-edit.component';
 import { LabtestListComponent } from './labtest-list/labtest-list.component';
const routes : Routes =[
  {path:'list',component :LabListComponent},
  {path:'add',component :LabAddComponent},
  
  
];

 @NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
  
  
})
export class LabRoutingModule { }
