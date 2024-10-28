import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //imported file
import { ToastrModule } from 'ngx-toastr'; //imported file
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import{CmsInterceptor} from 'src/app/auth/cms.interceptor';
import { AuthModule } from './auth/auth.module';

import { LabAddComponent } from './labtechnician/lab-add/lab-add.component';


@NgModule({
  declarations: [
    AppComponent,
   
    LabAddComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule
  ],
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
