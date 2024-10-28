// prescription-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { PrescriptionDetailsViewModel } from 'src/app/shared/prescription-details-view-model';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.scss']
})
export class PrescriptionDetailsComponent implements OnInit {
  appointmentId: number = 0;
  prescriptionDetails: PrescriptionDetailsViewModel[] = [];

  constructor(
    private pharmacistService: PharmacistService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the appointmentId from route parameters
    this.appointmentId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Fetch prescription details for the specific appointmentId
    this.pharmacistService.getAllPrescriptionDetailsList(this.appointmentId).subscribe(
      (data: PrescriptionDetailsViewModel[]) => {
        this.prescriptionDetails = data;
      },
      (error) => {
        console.error("Error fetching details", error);
      }
    );

  }
  
   
}

