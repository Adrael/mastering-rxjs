import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeAsyncTickComponent } from './fake-async-tick.component';

describe('FakeAsyncTickComponent', () => {
  let component: FakeAsyncTickComponent;
  let fixture: ComponentFixture<FakeAsyncTickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeAsyncTickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeAsyncTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
