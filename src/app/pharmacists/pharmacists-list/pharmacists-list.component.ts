import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { MedicineInfo } from 'src/app/shared/medicine-info';

@Component({
  selector: 'app-pharmacists-list',
  templateUrl: './pharmacists-list.component.html',
  styleUrls: ['./pharmacists-list.component.scss']
})
export class PharmacistsListComponent implements OnInit {
  // declare variables
  searchTerm: string = '';
  page: number = 1;

  filteredMedicines: MedicineInfo[] = [];

  constructor(
    public pharmacistService: PharmacistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("Hi, I am the medicine list component");

    // observable to fetch medicines
    this.pharmacistService.getAllMedicines().subscribe(
      (data: MedicineInfo[]) => {
        this.pharmacistService.medicineInfos = data; // global
        this.filteredMedicines = data; // component-based
        
      },
      (error) => {
        console.error("Error fetching medicines", error);
      }
    )
  }
  filterMedicines():void{
    const term = this.searchTerm.toLowerCase()
    this.filteredMedicines = this.pharmacistService.medicineInfos.filter(
      medicine=>
        medicine.MedicineName.toLowerCase().includes(term) 
      // medicine.Designation.toLowerCase().includes(term)
    );
  }
  //update employee
  updateEmployee(medicineInfo:MedicineInfo):void{
    console.log(medicineInfo);
    this.pharmacistService.medicineInfo=Object.assign({},medicineInfo);
    this.router.navigate(['/pharmacists/update',medicineInfo.MedicineId]);
  }
}
