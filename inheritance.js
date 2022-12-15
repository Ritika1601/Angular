class Person{

    name:string;
  
      constructor(name:string)
  
      {
  
          this.name=name;
  
      }
  
     
  
  }
  
  class Employee extends Person
  
  {
  
      empCode:number;
  
      constructor(empcode:number,name:string)
  
      {
  
          super(name);
  
          this.empCode=empcode;
  
  
  
      }
  
      display=()=>{
  
          console.log("Name=" + this.name+"Employee Code="+this.empCode);
  
      }
  
  
  
  }
  
  let emp=new Employee(100,'jaynam');
  
  emp.display();