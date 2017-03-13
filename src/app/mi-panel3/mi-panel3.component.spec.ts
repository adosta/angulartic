/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiPanel3Component } from './mi-panel3.component';

describe('MiPanel3Component', () => {
  let component: MiPanel3Component;
  let fixture: ComponentFixture<MiPanel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPanel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
