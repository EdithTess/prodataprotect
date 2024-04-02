import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComplaintPersonalDataItemisedComponent } from './data-complaint-personal-data-itemised.component';

describe('DataComplaintPersonalDataItemisedComponent', () => {
  let component: DataComplaintPersonalDataItemisedComponent;
  let fixture: ComponentFixture<DataComplaintPersonalDataItemisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataComplaintPersonalDataItemisedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComplaintPersonalDataItemisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
