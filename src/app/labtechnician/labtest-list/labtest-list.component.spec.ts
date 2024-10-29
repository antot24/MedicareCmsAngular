import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestListComponent } from './labtest-list.component';

describe('LabtestListComponent', () => {
  let component: LabtestListComponent;
  let fixture: ComponentFixture<LabtestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
