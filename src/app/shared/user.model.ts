
export class UserCred {
  public email: string;
  public password: string;
  public designation : string
  


  constructor(email: string, password: string,designation : string) {
    this.email = email;
    this.password = password;
    this.designation=designation;

  }
}
