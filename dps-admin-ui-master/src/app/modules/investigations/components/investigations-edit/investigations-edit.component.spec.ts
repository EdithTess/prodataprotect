import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsEditComponent } from './investigations-edit.component';

describe('InvestigationsEditComponent', () => {
  let component: InvestigationsEditComponent;
  let fixture: ComponentFixture<InvestigationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
