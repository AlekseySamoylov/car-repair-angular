import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRepairComponent } from './car-repair.component';

describe('CarRepairComponent', () => {
  let component: CarRepairComponent;
  let fixture: ComponentFixture<CarRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
