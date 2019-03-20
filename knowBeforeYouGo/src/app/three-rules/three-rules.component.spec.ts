import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRulesComponent } from './three-rules.component';

describe('ThreeRulesComponent', () => {
  let component: ThreeRulesComponent;
  let fixture: ComponentFixture<ThreeRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
