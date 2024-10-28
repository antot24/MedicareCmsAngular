import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Medicineprescriptionlist } from 'src/app/vmdoctor/medicineprescriptionlist';

@Component({
  selector: 'app-medicineprescription-list',
  templateUrl: './medicineprescription-list.component.html',
  styleUrls: ['./medicineprescription-list.component.scss']
})
export class MedicineprescriptionListComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router: Router) { }



  //Life Cycle Hook
  ngOnInit(
    
  ): void {
    console.log('Hi, I am medicineprescription List Component');

    //Obbservable method using
    this.doctorService.getAllMedicinePrescriptionsList().subscribe(
      (data: Medicineprescriptionlist[]) => {
        this.doctorService.medicineprescriptionslist = data; //global
      },
      (error) => {
        console.error('Error Fetching Medicine Prescription list', error)
      }
    )



  }


  //Delete Medicine Prescription
  deleteMedicinePrescription(id: number): void {
  
      this.doctorService.deleteMedicinePrescription(id).subscribe(
        () => {
          console.log(`Medicine prescription with ID ${id} deleted successfully.`);
          // Update the local list by filtering out the deleted item
          this.doctorService.medicineprescriptionslist = this.doctorService.medicineprescriptionslist.filter(
            item => item.MedicinePrescriptionId !== id
          );
        },
        (error) => {
          console.error('Error deleting medicine prescription', error);
        }
      );
    
  }

}
