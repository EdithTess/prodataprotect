import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegistrationUpdateComponent } from './manage-registration-update.component';

describe('ManageRegistrationUpdateComponent', () => {
  let component: ManageRegistrationUpdateComponent;
  let fixture: ComponentFixture<ManageRegistrationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRegistrationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRegistrationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
