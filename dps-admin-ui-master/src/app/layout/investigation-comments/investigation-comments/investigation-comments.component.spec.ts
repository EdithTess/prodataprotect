import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationCommentsComponent } from './investigation-comments.component';

describe('InvestigationCommentsComponent', () => {
  let component: InvestigationCommentsComponent;
  let fixture: ComponentFixture<InvestigationCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigationCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
