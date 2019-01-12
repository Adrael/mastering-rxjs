import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSchedulerComponent } from './async-scheduler.component';

describe('AsyncSchedulerComponent', () => {
  let component: AsyncSchedulerComponent;
  let fixture: ComponentFixture<AsyncSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
