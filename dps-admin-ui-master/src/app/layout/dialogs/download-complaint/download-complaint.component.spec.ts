import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadComplaintComponent } from './download-complaint.component';

describe('DownloadComplaintComponent', () => {
  let component: DownloadComplaintComponent;
  let fixture: ComponentFixture<DownloadComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
