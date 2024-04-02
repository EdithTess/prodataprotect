import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyDialogComponent } from './thirdparty-dialog.component';

describe('ThirdpartyDialogComponent', () => {
  let component: ThirdpartyDialogComponent;
  let fixture: ComponentFixture<ThirdpartyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdpartyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
