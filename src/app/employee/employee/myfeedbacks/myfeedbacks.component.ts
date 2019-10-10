import { Component, OnInit } from '@angular/core';
import { FbService } from 'src/app/shared/fb.service';
import { FBmodel } from 'src/app/shared/fb.model';



@Component({
  selector: 'app-myfeedbacks',
  templateUrl: './myfeedbacks.component.html',
  styleUrls: ['./myfeedbacks.component.css']
})
export class MyfeedbacksComponent implements OnInit {

  constructor(private fbs :FbService) { }
  FBmodel: FBmodel[]
  ngOnInit() {
    this.FBmodel = this.fbs.getFeedback();
    console.log(JSON.stringify(this.FBmodel));
    this.fbs.feedbackAdded
      .subscribe(
        (FBmodel: FBmodel[]) => {
          this.FBmodel = FBmodel;
        }
       
      );

      console.log('ss'+JSON.stringify(this.FBmodel));
  }
  deleteRecord(i : number){
    this.fbs.deleteFB(i);
  }


}
