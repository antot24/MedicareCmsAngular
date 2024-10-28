import {Role} from "./role";// import role class before creating the object

export class Staff {
    StaffId: number = 0;
    FirstName: string = '';
    LastName: string = '';
    Gender: string = '';
    DateOfBirth: Date = new Date(); 
    BloodGroup?: string = '';
    JoiningDate: Date = new Date();  
    Salary: number = 0.0;
    Experience: number = 0;
    PhoneNumber: string = '';
    Email: string = '';
    Qualification: string = '';
    Address?: string = '';
    IsActive: boolean = false;
    DepartmentId: number = 0;
    RoleId: number = 0;

    //Foreign Key
    Role:Role=new Role();


    
    
  }