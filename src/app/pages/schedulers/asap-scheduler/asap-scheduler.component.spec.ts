import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsapSchedulerComponent } from './asap-scheduler.component';

describe('AsapSchedulerComponent', () => {
  let component: AsapSchedulerComponent;
  let fixture: ComponentFixture<AsapSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsapSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsapSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
