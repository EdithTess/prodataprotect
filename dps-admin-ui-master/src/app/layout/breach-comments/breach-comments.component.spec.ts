import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachCommentsComponent } from './breach-comments.component';

describe('BreachCommentsComponent', () => {
  let component: BreachCommentsComponent;
  let fixture: ComponentFixture<BreachCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
