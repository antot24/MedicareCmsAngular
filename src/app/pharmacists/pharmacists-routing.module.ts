import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacistsListComponent } from './pharmacists-list/pharmacists-list.component';
import { PharmacistsAddComponent } from './pharmacists-add/pharmacists-add.component';
import { PharmacistsUpdateComponent } from './pharmacists-update/pharmacists-update.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

const routes: Routes = [
  {path:'list',component:PharmacistsListComponent},
  {path:'add',component:PharmacistsAddComponent},
  {path:'update/:id',component:PharmacistsUpdateComponent},
  {path:'prescriptionList',component:PrescriptionlistComponent},
  {path:'prescriptiondetails/:id',component:PrescriptionDetailsComponent},
  {path:'generateBill/:id',component:GenerateBillComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacistsRoutingModule { }
