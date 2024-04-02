import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachRequestForInformationComponent } from './breach-request-for-information.component';

describe('BreachRequestForInformationComponent', () => {
  let component: BreachRequestForInformationComponent;
  let fixture: ComponentFixture<BreachRequestForInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachRequestForInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachRequestForInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
