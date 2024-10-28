import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Testprescriptionlist } from 'src/app/vmdoctor/testprescriptionlist';

@Component({
  selector: 'app-testprescription-list',
  templateUrl: './testprescription-list.component.html',
  styleUrls: ['./testprescription-list.component.scss']
})
export class TestprescriptionListComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router: Router) { }

   //Life Cycle Hook
   ngOnInit(
    
   ): void {
     console.log('Hi, I am Testprescription List Component');
 
     //Obbservable method using
     this.doctorService.getAllTestPrescriptionsList().subscribe(
       (data: Testprescriptionlist[]) => {
         this.doctorService.testprescriptionslist = data; //global
       },
       (error) => {
         console.error('Error Fetching Test Prescription list', error)
       }
     )
 
 
 
   }
 
 
   //Delete Test Prescription
   deleteTestPrescription(id: number): void {
    // if (confirm('Are you sure you want to remove this test?')) {
      this.doctorService.deleteTestPrescription(id).subscribe(
        () => {
          console.log(`Test prescription with ID ${id} deleted successfully.`);
          // Update the local list by filtering out the deleted item
          this.doctorService.testprescriptionslist = this.doctorService.testprescriptionslist.filter(
            item => item.TestPrescriptionId !== id
          );
        },
        (error) => {
          console.error('Error deleting test prescription', error);
        }
      );
    // }
  }
 

}
