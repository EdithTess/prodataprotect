import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachInvestigationsComponent } from './breach-investigations.component';

describe('BreachInvestigationsComponent', () => {
  let component: BreachInvestigationsComponent;
  let fixture: ComponentFixture<BreachInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachInvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
