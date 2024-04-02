import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCommentsComponent } from './complaint-comments.component';

describe('ComplaintCommentsComponent', () => {
  let component: ComplaintCommentsComponent;
  let fixture: ComponentFixture<ComplaintCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
