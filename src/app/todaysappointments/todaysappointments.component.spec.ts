import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysappointmentsComponent } from './todaysappointments.component';

describe('TodaysappointmentsComponent', () => {
  let component: TodaysappointmentsComponent;
  let fixture: ComponentFixture<TodaysappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
