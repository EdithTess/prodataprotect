import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormInputComponent } from './dialog-form-input.component';

describe('DialogFormInputComponent', () => {
  let component: DialogFormInputComponent;
  let fixture: ComponentFixture<DialogFormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogFormInputComponent]
    });
    fixture = TestBed.createComponent(DialogFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
