import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineprescriptionListComponent } from './medicineprescription-list.component';

describe('MedicineprescriptionListComponent', () => {
  let component: MedicineprescriptionListComponent;
  let fixture: ComponentFixture<MedicineprescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineprescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineprescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
