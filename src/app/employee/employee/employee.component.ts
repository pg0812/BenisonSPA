import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
userName : string;

constructor(  
  private route: ActivatedRoute,
  private router: Router){

  }
ngOnInit() {
  
}
navigatenewFB(){
 
  this.router.navigate(['newFeedBack'],{relativeTo: this.route});
}
navigatemyFB(){
  this.router.navigate(['myFeedBack'], {relativeTo: this.route});
  
}
    

}
