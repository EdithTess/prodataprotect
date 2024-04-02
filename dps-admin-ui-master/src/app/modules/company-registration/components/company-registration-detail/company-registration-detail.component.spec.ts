import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationDetailComponent } from './company-registration-detail.component';

describe('CompanyRegistrationDetailComponent', () => {
  let component: CompanyRegistrationDetailComponent;
  let fixture: ComponentFixture<CompanyRegistrationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRegistrationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
