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
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
];
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule
    
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
