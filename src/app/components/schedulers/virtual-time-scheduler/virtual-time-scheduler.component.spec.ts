import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualTimeSchedulerComponent } from './virtual-time-scheduler.component';

describe('VirtualTimeSchedulerComponent', () => {
  let component: VirtualTimeSchedulerComponent;
  let fixture: ComponentFixture<VirtualTimeSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualTimeSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualTimeSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
