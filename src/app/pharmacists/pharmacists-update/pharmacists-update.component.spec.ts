import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistsUpdateComponent } from './pharmacists-update.component';

describe('PharmacistsUpdateComponent', () => {
  let component: PharmacistsUpdateComponent;
  let fixture: ComponentFixture<PharmacistsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
