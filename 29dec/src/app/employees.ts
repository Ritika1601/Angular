export class EmployeeForm{
    id:number; 
    name:string;
     email:string;
     password:string;
     gender:string;
     dob:string;
     mob:string;
     skills:string;
     constructor(id:number,name:string,email:string,password:string,gender:string,dob:string,mob:string,skills:string){
     this.id = id;
     this.name = name;
     this.email = email;
     this.password = password;
     this.gender = gender;
     this.dob = dob;
     this.mob = mob;
     this.skills = skills;
     }
    }
    