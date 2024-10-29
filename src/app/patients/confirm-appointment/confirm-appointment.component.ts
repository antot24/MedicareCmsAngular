import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-confirm-appointment',
  templateUrl: './confirm-appointment.component.html',
  styleUrls: ['./confirm-appointment.component.scss']
})
export class ConfirmAppointmentComponent implements OnInit {
  appointment: any;

  constructor(private receptionistservice: ReceptionistService) { }

  ngOnInit(): void {
    // Retrieve appointment details from the service
    this.appointment = this.receptionistservice.appointmentViewModel;
  }
  printPage(): void {
    window.print();
  }

}
