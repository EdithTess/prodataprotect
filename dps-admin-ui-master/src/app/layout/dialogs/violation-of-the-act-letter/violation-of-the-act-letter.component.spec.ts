import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationOfTheActLetterComponent } from './violation-of-the-act-letter.component';

describe('ViolationOfTheActLetterComponent', () => {
  let component: ViolationOfTheActLetterComponent;
  let fixture: ComponentFixture<ViolationOfTheActLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationOfTheActLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationOfTheActLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
