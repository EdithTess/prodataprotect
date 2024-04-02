import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardInvestigationsComponent } from './forward-investigations.component';

describe('ForwardInvestigationsComponent', () => {
  let component: ForwardInvestigationsComponent;
  let fixture: ComponentFixture<ForwardInvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardInvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
