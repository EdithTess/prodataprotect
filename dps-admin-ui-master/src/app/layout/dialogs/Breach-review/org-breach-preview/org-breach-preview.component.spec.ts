import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgBreachPreviewComponent } from './org-breach-preview.component';

describe('OrgBreachPreviewComponent', () => {
  let component: OrgBreachPreviewComponent;
  let fixture: ComponentFixture<OrgBreachPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgBreachPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgBreachPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
