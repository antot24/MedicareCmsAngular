import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacistsRoutingModule } from './pharmacists-routing.module';
import { PharmacistsComponent } from './pharmacists.component';
import { PharmacistsAddComponent } from './pharmacists-add/pharmacists-add.component';
import { PharmacistsListComponent } from './pharmacists-list/pharmacists-list.component';
import { PharmacistsUpdateComponent } from './pharmacists-update/pharmacists-update.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModule } from '../auth/auth.module';
import { PharmacistnavbarComponent } from './pharmacistnavbar/pharmacistnavbar.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';


@NgModule({
  declarations: [PharmacistsComponent, PharmacistsAddComponent, PharmacistsListComponent, PharmacistsUpdateComponent,
    PharmacistnavbarComponent,
    PrescriptionlistComponent,
    PrescriptionDetailsComponent,
    GenerateBillComponent
  ],
  imports: [
    CommonModule,
    PharmacistsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  
})
export class PharmacistsModule { }
