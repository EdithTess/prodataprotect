import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplianceReportComponent } from './view-compliance-report.component';

describe('ViewComplianceReportComponent', () => {
  let component: ViewComplianceReportComponent;
  let fixture: ComponentFixture<ViewComplianceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComplianceReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplianceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
