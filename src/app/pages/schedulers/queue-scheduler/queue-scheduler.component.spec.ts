import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueSchedulerComponent } from './queue-scheduler.component';

describe('QueueSchedulerComponent', () => {
  let component: QueueSchedulerComponent;
  let fixture: ComponentFixture<QueueSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
