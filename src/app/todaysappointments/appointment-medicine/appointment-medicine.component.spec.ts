import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentMedicineComponent } from './appointment-medicine.component';

describe('AppointmentMedicineComponent', () => {
  let component: AppointmentMedicineComponent;
  let fixture: ComponentFixture<AppointmentMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
