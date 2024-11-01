import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistsListComponent } from './pharmacists-list.component';

describe('PharmacistsListComponent', () => {
  let component: PharmacistsListComponent;
  let fixture: ComponentFixture<PharmacistsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
