import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationsFindComponent } from './investigations-find.component';

describe('InvestigationsFindComponent', () => {
  let component: InvestigationsFindComponent;
  let fixture: ComponentFixture<InvestigationsFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigationsFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationsFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
