import { Injectable } from '@angular/core';
import { UserCred } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class LogiAuthService {
 
  private userCred: UserCred[] = [
    new UserCred(
      'Pratik',
      'Pratik',
      'Employee'
      
     ), new UserCred(
      'Parth',
      'Parth',
      'manager'
      
     ),new UserCred(
      'Satish',
      'Satish',
      'Employee'
      
     )];

  constructor() { }
  
trueUser : boolean =false;
  loginUser(email : string ,password : string){
    //console.log('Inside for'+JSON.stringify(this.userCred));
    for(let user in this.userCred){
    //  console.log('Inside for'+JSON.stringify(this.userCred[user]));
   console.log('Inside for1'+JSON.stringify(email+this.userCred[user].email));
      if(email==this.userCred[user].email && (password==this.userCred[user].password )){
        if(this.userCred[user].designation=='manager'){
        
          this.trueUser=true;
          return this.userCred[user].designation ;
        }
        if(this.userCred[user].designation=='Employee'){
         
          this.trueUser=true;
          return this.userCred[user].designation ;
        }
       


      }}
       if(this.trueUser==false){
       
        return "Error";
        

      }
    
  //  console.log(email+password);

  }
}
