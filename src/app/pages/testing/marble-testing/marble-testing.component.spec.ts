import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleTestingComponent } from './marble-testing.component';

describe('MarbleTestingComponent', () => {
  let component: MarbleTestingComponent;
  let fixture: ComponentFixture<MarbleTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarbleTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
