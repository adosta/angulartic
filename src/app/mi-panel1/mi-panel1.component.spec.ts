/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiPanel1Component } from './mi-panel1.component';

describe('MiPanel1Component', () => {
  let component: MiPanel1Component;
  let fixture: ComponentFixture<MiPanel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPanel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPanel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
