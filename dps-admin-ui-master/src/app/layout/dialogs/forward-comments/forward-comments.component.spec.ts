import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardCommentsComponent } from './forward-comments.component';

describe('ForwardCommentsComponent', () => {
  let component: ForwardCommentsComponent;
  let fixture: ComponentFixture<ForwardCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
