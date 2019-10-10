import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { FBmodel } from 'src/app/shared/fb.model';
import { FeedbackService } from 'src/app/employee/feedback.service';
import { FbService } from 'src/app/shared/fb.service';


@Component({
  selector: 'app-view-feeb-back',
  templateUrl: './view-feeb-back.component.html',
  styleUrls: ['./view-feeb-back.component.css']
})
export class ViewFeebBackComponent implements OnInit {
   isReadonly = true;
  temprating: number;
  constructor(private fbs : FbService  ) { }
  FBmodel : FBmodel[];
  ngOnInit() {
   this.FBmodel = this.fbs.getFeedback();
    console.log(JSON.stringify(this.FBmodel));
    this.fbs.feedbackAdded
      .subscribe(
        (FBmodel: FBmodel[]) => {
          this.FBmodel = FBmodel;
        }
       
      );
  }


  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.temprating =$event.newValue;

  }
  OnSubmit( mgrcomments :HTMLInputElement,i : number,rating : HTMLInputElement  ){
    this.FBmodel[i].mgrComments=mgrcomments.value;
    this.FBmodel[i].rating=+rating.value;
   
   console.log( this.FBmodel[i]);

  }
  deleteRecord(i : number){
    this.fbs.deleteFB(i);
    
  }
}
