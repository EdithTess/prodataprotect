import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardMessageDialogComponent } from './forward-message-dialog.component';

describe('ForwardMessageDialogComponent', () => {
  let component: ForwardMessageDialogComponent;
  let fixture: ComponentFixture<ForwardMessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardMessageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardMessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
