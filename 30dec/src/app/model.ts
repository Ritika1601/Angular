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
    export class BasicInfo{
        id:number;
        fullname:string;
        email:string;
        fathersname:string;
        mothersname:string;
        gender:string;
        dob:string;
        mob:string;
        constructor(id:number,fullname:string,email:string,fathersname:string,mothersname:string,gender:string,dob:string,mob:string){
            this.id = id;
            this.fullname = fullname;
            this.email = email;
            this.fathersname = fathersname;
            this.mothersname = mothersname;
            this.gender = gender;
            this.dob = dob;
            this.mob = mob;
        }
    }
    export class BankDetails{
        id:number;
        fullname:string;
        accountNo:string;
        bankName:string;
        ifsc:string;
        mobilebanking:string;
        netbanking:string
        constructor(id:number,fullname:string,accountNo:string,bankName:string,ifsc:string,mobilebanking:string,netbanking:string){
                this.id=id;
                this.fullname=fullname;
                this.accountNo=accountNo;
                this.bankName = bankName;
                this.ifsc=ifsc;
                this.mobilebanking=mobilebanking;
                this.netbanking=netbanking
            }
    }
    export class Address{
        id:number;
        presentaddr:string;
        permanentaddr:string;
        
        constructor(id:number,presentadddr:string,permanentaddr:string) {
            this.id=id;
            this.presentaddr = presentadddr;
            this.permanentaddr = permanentaddr;
            
        }
    }