import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { PrescriptionViewModel } from 'src/app/shared/prescription-view-model';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.scss']
})
export class PrescriptionlistComponent implements OnInit {
  // Declare variables
  searchTerm: string = '';
  page: number = 1;

  filteredPrescriptions: PrescriptionViewModel[] = [];

  constructor(
    public pharmacistService: PharmacistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("Hi. I am the medicine prescription component");
    //observable type
    this.pharmacistService.getAllPrescriptionList().subscribe(
      (data:PrescriptionViewModel[])=>{
        this.pharmacistService.prescriptions=data;
        this.filteredPrescriptions=data;
      },
      (error)=>{
        console.error("error fetching prescriptions",error);
      }
    )

    
  }
  //method to filter prescription based on search erm
  filterPrescription():void{
    const term=this.searchTerm.toLowerCase()
    this.filteredPrescriptions=this.pharmacistService.prescriptions.filter(
      prescription=>prescription.PatientName.toLowerCase().includes(term)
      

    );
  }
// prescriptionlist.component.ts
Details(prescription: PrescriptionViewModel): void {
  // Navigate to the details route with the appointmentId as a parameter
  this.router.navigate(['/prescriptiondetails', prescription.AppointmentId]);
}

  
}
