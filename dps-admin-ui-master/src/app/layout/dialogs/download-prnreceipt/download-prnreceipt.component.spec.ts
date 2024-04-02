import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPRNReceiptComponent } from './download-prnreceipt.component';

describe('DownloadPRNReceiptComponent', () => {
  let component: DownloadPRNReceiptComponent;
  let fixture: ComponentFixture<DownloadPRNReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPRNReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPRNReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
