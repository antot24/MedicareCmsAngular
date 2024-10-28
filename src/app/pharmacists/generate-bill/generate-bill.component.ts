import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { PrescriptionDetailsViewModel } from 'src/app/shared/prescription-details-view-model';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit {
  appointmentId: number = 0;
  prescriptionDetails: PrescriptionDetailsViewModel | null = null;

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
        if (data.length > 0) {
          this.prescriptionDetails = data[0]; // Assuming one prescription per appointment
        } else {
          console.error("No prescription details found for the given appointment ID.");
        }
      },
      (error) => {
        console.error("Error fetching prescription details", error);
      }
    );
  }

  generateBill(): void {
    if (this.prescriptionDetails) {
      this.pharmacistService.generateBill(this.appointmentId).subscribe(
        (response: Blob) => {
          // Create a blob object for the PDF file
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          
          // Create a link element and click it to trigger download
          const a = document.createElement('a');
          a.href = url;
          a.download = `Prescription-Details-${this.appointmentId}.pdf`; // Set file name
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a); // Cleanup
          console.log("Bill generated and download initiated.");
        },
        error => {
          console.error("Error generating bill:", error);
        }
      );
    } else {
      console.error("Prescription details are not available.");
    }
  }
  
}
