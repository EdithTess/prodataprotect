import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfringementLetterComponent } from './infringement-letter.component';

describe('InfringementLetterComponent', () => {
  let component: InfringementLetterComponent;
  let fixture: ComponentFixture<InfringementLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfringementLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfringementLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
