import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee/employee.component';
import { LoginComponent } from './shared/login/login.component';
import { NewFeedbackComponent } from './employee/employee/new-feedback/new-feedback.component';
import { MyfeedbacksComponent } from './employee/employee/myfeedbacks/myfeedbacks.component';
import { ViewFeebBackComponent } from './manager/view-feeb-back/view-feeb-back.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee', redirectTo: '/employee/newFeedBack', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, children: [
    { path: 'newFeedBack', component: NewFeedbackComponent },
    { path: 'myFeedBack', component: MyfeedbacksComponent }
    
  ] },
  { path: 'manager', component: ViewFeebBackComponent },

 
  //{ path: 'shopping-list', component: ShoppingListComponent },
  //{ path: 'users', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
