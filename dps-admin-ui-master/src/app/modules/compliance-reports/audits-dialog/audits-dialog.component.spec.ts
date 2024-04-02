import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsDialogComponent } from './audits-dialog.component';

describe('AuditsDialogComponent', () => {
  let component: AuditsDialogComponent;
  let fixture: ComponentFixture<AuditsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
