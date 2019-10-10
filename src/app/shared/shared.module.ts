import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BasicHighlightDirective } from './basic-highlight.directive';



@NgModule({
  declarations: [LoginComponent, BasicHighlightDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
