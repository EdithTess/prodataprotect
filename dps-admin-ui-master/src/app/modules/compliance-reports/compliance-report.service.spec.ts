import { TestBed } from '@angular/core/testing';

import { ComplianceReportService } from './compliance-report.service';

describe('ComplianceReportService', () => {
  let service: ComplianceReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplianceReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
