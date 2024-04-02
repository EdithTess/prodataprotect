import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintPendingTasksComponent } from './complaint-pending-tasks.component';

describe('ComplaintPendingTasksComponent', () => {
  let component: ComplaintPendingTasksComponent;
  let fixture: ComponentFixture<ComplaintPendingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintPendingTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintPendingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
