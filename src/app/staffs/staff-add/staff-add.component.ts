import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AdminService} from 'src/app/services/admin.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss']
})
export class StaffAddComponent implements OnInit {

  constructor(
    public adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  
  

  ngOnInit(): void {
    // this.staffService.getAllDoctors();
    this.adminService.getAllDepartments(); 
    this.adminService.getAllRoles();
  }
  
  // Back Button Method
  goBack(): void {
    this.router.navigate(['/staffs/list']); 
  }

  




  // Submit Form
  onSubmit(form: NgForm) {
    console.log(form.value);

    

    // Call Insert method
    this.addStaff(form);

    // Reset Form
    form.reset();

    // Redirect to list
    this.router.navigate(['/staffs/list']);
  }

  

  // Insert
  addStaff(form?: NgForm) {
    console.log("Inserting staff...");
    this.adminService.insertStaff(form?.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success("Record has been inserted successfully");
          this.adminService.getAllStaffsList();
          this.router.navigate(['/staffs/list']);
        },
        (error) => {
          console.log(error);
          this.toastr.error('Oops! Something went wrong, try again.', 'HRMS Version 2024');
        }
      );
  }
}
