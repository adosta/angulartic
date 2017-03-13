/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mipanel2Component } from './mipanel2.component';

describe('Mipanel2Component', () => {
  let component: Mipanel2Component;
  let fixture: ComponentFixture<Mipanel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mipanel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mipanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
