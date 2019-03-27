import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTopComponent } from './three-top.component';

describe('ThreeTopComponent', () => {
  let component: ThreeTopComponent;
  let fixture: ComponentFixture<ThreeTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
