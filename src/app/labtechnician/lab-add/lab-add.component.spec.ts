import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAddComponent } from './lab-add.component';

describe('LabAddComponent', () => {
  let component: LabAddComponent;
  let fixture: ComponentFixture<LabAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
