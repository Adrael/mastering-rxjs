import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFrameSchedulerComponent } from './animation-frame-scheduler.component';

describe('AnimationFrameSchedulerComponent', () => {
  let component: AnimationFrameSchedulerComponent;
  let fixture: ComponentFixture<AnimationFrameSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFrameSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFrameSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
