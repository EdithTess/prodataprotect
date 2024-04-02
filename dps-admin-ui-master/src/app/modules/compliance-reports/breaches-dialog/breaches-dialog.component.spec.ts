import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachesDialogComponent } from './breaches-dialog.component';

describe('BreachesDialogComponent', () => {
  let component: BreachesDialogComponent;
  let fixture: ComponentFixture<BreachesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
