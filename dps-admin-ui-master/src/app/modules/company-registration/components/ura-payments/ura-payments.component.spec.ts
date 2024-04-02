import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UraPaymentsComponent } from './ura-payments.component';

describe('UraPaymentsComponent', () => {
  let component: UraPaymentsComponent;
  let fixture: ComponentFixture<UraPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UraPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UraPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
