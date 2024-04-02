import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestigationComponent } from './view-investigation.component';

describe('ViewInvestigationComponent', () => {
  let component: ViewInvestigationComponent;
  let fixture: ComponentFixture<ViewInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInvestigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
