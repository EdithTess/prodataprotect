import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionUploadComponent } from './resolution-upload.component';

describe('ResolutionUploadComponent', () => {
  let component: ResolutionUploadComponent;
  let fixture: ComponentFixture<ResolutionUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
