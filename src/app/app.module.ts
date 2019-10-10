import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StarRatingComponent, RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCred } from './shared/user.model';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ViewFeebBackComponent } from './manager/view-feeb-back/view-feeb-back.component';
import { ManagerModule } from './manager/manager.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EmployeeModule,
    ReactiveFormsModule,
    ManagerModule,
    RatingModule
    
    
    
  ], 
  exports: [
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
