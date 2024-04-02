import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatherMoreInformationComponent } from './gather-more-information.component';

describe('GatherMoreInformationComponent', () => {
  let component: GatherMoreInformationComponent;
  let fixture: ComponentFixture<GatherMoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatherMoreInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatherMoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
