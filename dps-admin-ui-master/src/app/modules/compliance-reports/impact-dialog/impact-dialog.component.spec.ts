import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactDialogComponent } from './impact-dialog.component';

describe('ImpactDialogComponent', () => {
  let component: ImpactDialogComponent;
  let fixture: ComponentFixture<ImpactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
