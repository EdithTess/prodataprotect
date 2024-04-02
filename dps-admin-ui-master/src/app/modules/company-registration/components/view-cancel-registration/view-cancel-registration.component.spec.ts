import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelRegistrationComponent } from './view-cancel-registration.component';

describe('ViewCancelRegistrationComponent', () => {
  let component: ViewCancelRegistrationComponent;
  let fixture: ComponentFixture<ViewCancelRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCancelRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
