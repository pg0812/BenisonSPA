import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFeebBackComponent } from './view-feeb-back/view-feeb-back.component';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent, RatingModule } from 'ng-starrating';




@NgModule({
  declarations: [ViewFeebBackComponent  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  exports : [ViewFeebBackComponent]
})
export class ManagerModule { }
