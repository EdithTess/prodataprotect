import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppropriateSecurityMeasuresLetterComponent } from './appropriate-security-measures-letter.component';

describe('AppropriateSecurityMeasuresLetterComponent', () => {
  let component: AppropriateSecurityMeasuresLetterComponent;
  let fixture: ComponentFixture<AppropriateSecurityMeasuresLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppropriateSecurityMeasuresLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppropriateSecurityMeasuresLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
