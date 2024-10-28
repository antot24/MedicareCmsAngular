import { Injectable } from '@angular/core';
import { Staff } from '../shared/staff';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Role } from '../shared/role';
import { Department } from '../shared/department';
import { Doctor } from '../shared/doctor';
import { Specialization } from '../shared/specialization';
import { Login } from '../shared/login';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Global variables
  staff: Staff = new Staff();
  staffs: Staff[] = [];
  roles: Role[];
  specializations: Specialization[];
  doctor:Doctor=new Doctor();
  doctors:Doctor[];
  departments: Department[];

  //@@
  logins:Login[];

  // Inject HttpClient for API requests
  constructor(private httpClient: HttpClient) { }

//[#######EDited Register user  ]
// Register user
registerUser(logins: Login): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}Logins/Register`, logins);
}


  // 1 - Create: Insert a new staff (POST)
  insertStaff(staff: Staff): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'Admins/as', staff);
  }

  // 2 - Read: Get all staff (GET) - Observable
  getAllStaffsList(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(environment.apiUrl + 'Admins/gs');
  }

  // 3 - Read: Get staff by ID (GET) - Observable
  getStaffById(staffId: number): Observable<Staff> {
    return this.httpClient.get<Staff>(`${environment.apiUrl}Admins/staff/${staffId}`);
  }

  // 4 - Update: Update staff information (PUT)
  updateStaff(staff: Staff): Observable<any> {
    console.log("inside service");
   // https://localhost:7017/api/admins/us/1000
   console.log(staff);
   
    return this.httpClient.put(`${environment.apiUrl}Admins/us/${staff.StaffId}`, staff);
  }

  // 5 - List all roles
  getAllRoles(): void {
    this.httpClient.get<Role[]>(environment.apiUrl + 'Admins/gr')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.roles = response as Role[];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // 6 - List all departments
  getAllDepartments(): void {
    this.httpClient.get<Department[]>(environment.apiUrl + 'Admins/gad')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.departments = response as Department[];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //get all specialization
  
  getAllSpecializations(): void {
    this.httpClient.get<Specialization[]>(environment.apiUrl + 'Admins/getsp')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.specializations = response as Specialization[];
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //insert doctor
  insertDoctor(staff: Staff): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'Admins/ad', staff);
  }

  



  //navigation from staff to doctor page 
  //doctor management
  //Insert a new doctor (POST)
  
  //Get all Doctors (GET) - Observable
  getAllDoctorssList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(environment.apiUrl + 'Admins/gd');
  }

}
