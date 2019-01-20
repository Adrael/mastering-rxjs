import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstOrUntilComponent } from './first-or-until.component';

describe('FirstOrUntilComponent', () => {
  let component: FirstOrUntilComponent;
  let fixture: ComponentFixture<FirstOrUntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstOrUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstOrUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
