export class UserForm {
  
    email: string = "Email";
    subcriptions:string = "subcriptions";
    password:string = "password";

  constructor(email:string,subcriptions:string,password:string) {
    this.email = email;
    this.subcriptions = subcriptions;
    this.password = password;
    
  }
}
export class ProjectForm{
    projectName:string;
    mail:string;
    projectStatus:string;
   
    constructor(projectName:string,mail:string,projectStatus:string,) {
      this.projectName = projectName;
      this.mail = mail;
      this.projectStatus = projectStatus;
    }
  }