import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachManageMoreInformationComponent } from './breach-manage-more-information.component';

describe('BreachManageMoreInformationComponent', () => {
  let component: BreachManageMoreInformationComponent;
  let fixture: ComponentFixture<BreachManageMoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachManageMoreInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachManageMoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
