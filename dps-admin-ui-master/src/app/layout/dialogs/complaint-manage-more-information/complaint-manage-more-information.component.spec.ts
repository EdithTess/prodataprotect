import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintManageMoreInformationComponent } from './complaint-manage-more-information.component';

describe('ComplaintManageMoreInformationComponent', () => {
  let component: ComplaintManageMoreInformationComponent;
  let fixture: ComponentFixture<ComplaintManageMoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintManageMoreInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintManageMoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
