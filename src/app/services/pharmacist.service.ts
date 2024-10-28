import { Injectable } from '@angular/core';
import { MedicineInfo } from '../shared/medicine-info';
import { PrescriptionViewModel } from '../shared/prescription-view-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PrescriptionDetailsViewModel } from '../shared/prescription-details-view-model';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {
  // Global variable
  medicineInfo: MedicineInfo = new MedicineInfo();

  // Array to store medicine information
  medicineInfos: MedicineInfo[] = [];

  // Global variable
  prescription: PrescriptionViewModel = new PrescriptionViewModel();
  
  // Array to store view model details
  prescriptions: PrescriptionViewModel[] = [];

  //pglobal varibale
  prescriptionDetail:PrescriptionDetailsViewModel=new PrescriptionDetailsViewModel();
  
  //array to store details
  prescriptionDetails:PrescriptionDetailsViewModel[]=[];
  

  constructor(private httpclient: HttpClient) {}

  // 1. Method to fetch all medicines with Promise
  getAllMedicinesPromise(): void {
    this.httpclient.get(`${environment.apiUrl}medicineInfos`)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.medicineInfos = response as MedicineInfo[];
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 2. Method to fetch all medicines using Observable
  getAllMedicines(): Observable<MedicineInfo[]> {
    return this.httpclient.get<MedicineInfo[]>(`${environment.apiUrl}Pharmacists/medicineList`);
  }

  // 3. Insert medicine
  insertMedicine(medicineInfos: MedicineInfo): Observable<number> {
    return this.httpclient.post<number>(`${environment.apiUrl}Pharmacists/insertMedicine`, medicineInfos);
  }

  // 4. Update medicine
  updateMedicine(medicineInfos: MedicineInfo): Observable<MedicineInfo> {
    return this.httpclient.put<MedicineInfo>(`${environment.apiUrl}Pharmacists/updateMedicine/${medicineInfos.MedicineId}`, medicineInfos);
  }

  // 5. Get all prescriptions
  getAllPrescriptions(): void {
    this.httpclient.get<PrescriptionViewModel[]>(`${environment.apiUrl}Pharmacists/patientPrescriptions`)
      .toPromise()
      .then((response) => {
        this.prescriptions = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 6. Get all prescriptions observable type
  getAllPrescriptionList(): Observable<PrescriptionViewModel[]> {
    return this.httpclient.get<PrescriptionViewModel[]>(`${environment.apiUrl}Pharmacists/patientPrescriptions`);
  }

  //7-get prescription details
  getAllPrescriptionDetails(appointmentId:Number):void{
    this.httpclient.get(`${environment.apiUrl}Pharmacists/prescriptionDetails/${appointmentId}`)
    .toPromise()
    .then((response)=>{
      console.log(response);
      this.prescriptionDetails=response as PrescriptionDetailsViewModel[];
    },
    (error)=>{
      console.log(error);
    }
  );
  }

  //observable
  getAllPrescriptionDetailsList(appointmentId:Number):Observable<any>{
   console.log("From service+"+appointmentId);
   //https://localhost:7017/api/Pharmacists/prescriptionDetails/5

    return this.httpclient.get(`${environment.apiUrl}Pharmacists/prescriptionDetails/${appointmentId}`)
  }

  //generate bill
 
  // Generate bill and create PDF
  generateBill(appointmentId: number): Observable<any> {
    return this.httpclient.get(`${environment.apiUrl}Pharmacists/generateBill/${appointmentId}`);
  }


  
}
