import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationCommentsComponent } from './cancellation-comments.component';

describe('CancellationCommentsComponent', () => {
  let component: CancellationCommentsComponent;
  let fixture: ComponentFixture<CancellationCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
