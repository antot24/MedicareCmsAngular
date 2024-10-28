import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprescriptionListComponent } from './testprescription-list.component';

describe('TestprescriptionListComponent', () => {
  let component: TestprescriptionListComponent;
  let fixture: ComponentFixture<TestprescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestprescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
