
export class FBmodel {
    public empname: string;
    public empid: string;
    public Projname : string;
    public rating : number;
    public comments : string;
    public mgrrating : number;
    public mgrComments : string;
   
  
    constructor(empname: string, empid: string,Projname : string,rating : number,comments : string,mgrrating : number,mgrComments : string ) {
      this.empname = empname;
      this.empid=empid;
      this.Projname=Projname;
      this.rating=rating;
      this.comments=comments;
      this.mgrrating=mgrrating;
      this.mgrComments=mgrComments;

 
    }
  }
  