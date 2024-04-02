import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpoDialogComponent } from './dpo-dialog.component';

describe('DpoDialogComponent', () => {
  let component: DpoDialogComponent;
  let fixture: ComponentFixture<DpoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DpoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
