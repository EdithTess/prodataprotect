import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationNotesComponent } from './investigation-notes.component';

describe('InvestigationNotesComponent', () => {
  let component: InvestigationNotesComponent;
  let fixture: ComponentFixture<InvestigationNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigationNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
