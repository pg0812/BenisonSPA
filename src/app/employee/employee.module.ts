import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { NewFeedbackComponent } from './employee/new-feedback/new-feedback.component';
import { MyfeedbacksComponent } from './employee/myfeedbacks/myfeedbacks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './employee/header/header.component';
import { BasicHighlightDirective } from '../shared/basic-highlight.directive';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [EmployeeComponent, NewFeedbackComponent, MyfeedbacksComponent, HeaderComponent,BasicHighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class EmployeeModule { }
