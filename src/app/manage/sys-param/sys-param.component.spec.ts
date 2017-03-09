/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SysParamComponent } from './sys-param.component';

describe('SysParamComponent', () => {
  let component: SysParamComponent;
  let fixture: ComponentFixture<SysParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
