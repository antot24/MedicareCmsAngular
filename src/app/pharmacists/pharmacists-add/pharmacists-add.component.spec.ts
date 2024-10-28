import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistsAddComponent } from './pharmacists-add.component';

describe('PharmacistsAddComponent', () => {
  let component: PharmacistsAddComponent;
  let fixture: ComponentFixture<PharmacistsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
