import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';  
import { Staff } from 'src/app/shared/staff';  // Import the Staff model

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {
  staffId: number;  // Variable to hold the staff ID

  constructor(
    public adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute to access route parameters
  ) { }

  ngOnInit(): void {
    this.adminService.getAllRoles();
    this.adminService.getAllDepartments();  
    
    // Get the staff ID from the route parameters
    this.staffId = +this.route.snapshot.paramMap.get('id'); // The ID is passed as a parameter

    // Fetch staff details by ID
    if (this.staffId) {
      this.adminService.getStaffById(this.staffId).subscribe(
        (staff: Staff) => {
          this.adminService.staff = staff;  // Assign fetched staff data to the service
        },
        (error) => {
          console.log('Error fetching staff details', error);
        }
      );
    }
  }

  //this.router.navigate(['/staffs/list']);

  // Submit Form
  onSubmit(form: NgForm) {
    console.log(form.value);
    
    // Call the method to update staff information
    this.updateStaff(form);

    // Reset Form after submission
    form.reset();
    this.router.navigate(['/staffs/list']);
    
  }

  // Back Button Method
  goBack(): void {
    this.router.navigate(['/staffs/list']); 
  }

  // Update Staff Method
  updateStaff(form?: NgForm) {
    console.log("Updating staff...");
    console.log(form.value);
    this.adminService.updateStaff(form.value)
      .subscribe(
        (response) => {
          
          console.log(response);
          // Optionally navigate to the staff list or show success message
          this.router.navigate(['/staffs/list']);  // Update route as necessary
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
