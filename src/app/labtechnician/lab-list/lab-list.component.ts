import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabService } from 'src/app/services/labtechnician.service';
import { TestInfo } from 'src/app/shared/test-info';


@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss']
})
export class LabListComponent implements OnInit {
  // declare variables
  searchTerm: string = '';
  page: number = 1;

  filteredTests: TestInfo[] = [];

  constructor(
    public labService: LabService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("Hi, I am the medicine list component");

    // observable to fetch medicines
    this.labService.getAllTests().subscribe(
      (data: TestInfo[]) => {
        this.labService.testInfos = data; // global
        this.filteredTests = data; // component-based

      },
      (error) => {
        console.error("Error fetching tests", error);
      }
    )
  }
  filterTests(): void {
    const term = this.searchTerm.toLowerCase()
    this.filteredTests = this.labService.testInfos.filter(
      test =>
        test.TestName.toLowerCase().includes(term)
      // medicine.Designation.toLowerCase().includes(term)
    );
  }



}