/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HiddendangersComponent } from './hiddendangers.component';

describe('HiddendangersComponent', () => {
  let component: HiddendangersComponent;
  let fixture: ComponentFixture<HiddendangersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddendangersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddendangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
