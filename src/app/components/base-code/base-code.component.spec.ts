import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCodeComponent } from './base-code.component';

describe('BaseCodeComponent', () => {
  let component: BaseCodeComponent;
  let fixture: ComponentFixture<BaseCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
