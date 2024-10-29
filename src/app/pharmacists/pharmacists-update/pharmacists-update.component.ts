import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';

@Component({
  selector: 'app-pharmacists-update',
  templateUrl: './pharmacists-update.component.html',
  styleUrls: ['./pharmacists-update.component.scss']
})
export class PharmacistsUpdateComponent implements OnInit {

  constructor(public pharmacistService:PharmacistService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.pharmacistService.getAllMedicines();

  }

  //submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    this.updateMedicine(form);
    form.reset();
  }
  //call update method
  updateMedicine(form: NgForm) {
    console.log('Updating medicine...');
    this.pharmacistService.updateMedicine(form.value)
      .subscribe(
        (response) => {
          console.log('Update successful:', response);
          alert('Medicine updated successfully!');
          this.router.navigate(['pharmacist/list']);  // Navigate after successful update
        },
        (error) => {
          console.error('Error updating medicine:', error);
          alert('Error updating medicine.');
        }
      );
  }
}
