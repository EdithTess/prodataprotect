import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceReportsComponent } from './compliance-reports-component.component';

describe('ComplianceReportsComponent', () => {
  let component: ComplianceReportsComponent;
  let fixture: ComponentFixture<ComplianceReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplianceReportsComponent]
    });
    fixture = TestBed.createComponent(ComplianceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
