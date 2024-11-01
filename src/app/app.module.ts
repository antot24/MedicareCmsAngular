import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr'; 
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';

import { RouterModule, Routes } from '@angular/router'; // from ahal

import { CmsInterceptor } from 'src/app/auth/cms.interceptor';
//import { RegisterComponent } from './register/register.component';

import { AuthModule } from './auth/auth.module';

import { LabAddComponent } from './labtechnician/lab-add/lab-add.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
  // Define your routes here
];
@NgModule({
  declarations: [

    AppComponent,
   
    LabAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule


  ],
  exports: [RouterModule],
  
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: CmsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
