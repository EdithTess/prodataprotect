import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUraPaymentComponent } from './manage-ura-payment.component';

describe('ManageUraPaymentComponent', () => {
  let component: ManageUraPaymentComponent;
  let fixture: ComponentFixture<ManageUraPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUraPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUraPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
