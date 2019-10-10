
export class FBmodel {
    public empname: string;
    public empid: string;
    public Projname : string;
    public rating : number;
    public comments : string;
   
  
    constructor(empname: string, empid: string,Projname : string,rating : number,comments : string) {
      this.empname = empname;
      this.empid=empid;
      this.Projname=Projname;
      this.rating=rating;
      this.comments=comments;

 
    }
  }
  