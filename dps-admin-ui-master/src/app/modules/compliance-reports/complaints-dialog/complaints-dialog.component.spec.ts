import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsDialogComponent } from './complaints-dialog.component';

describe('ComplaintsDialogComponent', () => {
  let component: ComplaintsDialogComponent;
  let fixture: ComponentFixture<ComplaintsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
