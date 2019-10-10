import { Injectable, EventEmitter, Output } from '@angular/core';
import { FBmodel } from './fb.model';

@Injectable({
  providedIn: 'root'
})
export class FbService {
  feedbackAdded = new EventEmitter<FBmodel[]>();
  private FBmodel: FBmodel[] = [
    new FBmodel(
      'Pratik',
      '23456',
      'Demo5',
      3,
      'A Project with good learning opportunities'
      
     ), new FBmodel(
      'Parth',
      '23456',
      'Demo2',
      4,
      'A good support project'
     )];
  constructor() { }
      getFeedback(){
        return this.FBmodel.slice();
      }
  addFeedBack(fbmode: FBmodel){
  // console.log('ss'+JSON.stringify(fbmode));
   this.FBmodel.push(fbmode);
   console.log('ds'+JSON.stringify(this.FBmodel));
   //ss{"userData":{"EmpName":"kk","empid":"k"},"Projname":"Demo5","rating":"3","comments":"fg"}
   this.feedbackAdded.emit(this.FBmodel.slice());

  }
  deleteFB(i : number){
this.FBmodel.splice(i, 1);
this.feedbackAdded.next(this.FBmodel.slice());
  }
}
