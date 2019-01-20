import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOrUntilComponent } from './take-or-until.component';

describe('TakeOrUntilComponent', () => {
  let component: TakeOrUntilComponent;
  let fixture: ComponentFixture<TakeOrUntilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOrUntilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOrUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
