import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs'; // Import Observable for the return type
import { TestInfo } from '../shared/test-info';
import { TestPrescription } from '../shared/test-prescription';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  // Global variable
  testInfo: TestInfo = new TestInfo();

  // Array to store test information
  testInfos: TestInfo[] = [];
  testpres: TestPrescription[] = [];




  constructor(private httpclient: HttpClient) { }

  // 1. Method to fetch all test with Promise
  getAllTestsPromise(): void {
    this.httpclient.get(environment.apiUrl + 'Labs/GetAll')
      .toPromise()
      .then((response) => {
        console.log(response);
        this.testInfos = response as TestInfo[];
      },
        (error) => {
          console.log(error);
        }
      );
  }

  // 2. Method to fetch all test using Observable
  getAllTests(): Observable<any> {
    return this.httpclient.get(environment.apiUrl + 'Labs/GetAll');
  }

  //3-insert test

  insertTest(testInfos: TestInfo): Observable<any> {
    return this.httpclient.post(environment.apiUrl + 'Labs/ReturnRecord', testInfos);
  }

  //3-update Test
  updateTest(testInfos: TestInfo): Observable<any> {
    return this.httpclient.put(environment.apiUrl + 'Labs/Update', testInfos);
  }



  getAllPrescriptions(): Observable<TestPrescription[]> {
    return this.httpclient.get<TestPrescription[]>(environment.apiUrl + 'Labs/GetTodaysTestPrescriptions');
  }



}