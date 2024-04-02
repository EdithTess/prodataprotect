import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComplianceReportsComponent } from './find-compliance-reports.component';

describe('FindComplianceReportsComponent', () => {
  let component: FindComplianceReportsComponent;
  let fixture: ComponentFixture<FindComplianceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindComplianceReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComplianceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
