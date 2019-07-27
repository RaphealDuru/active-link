import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Park1Page } from './park1.page';

describe('Park1Page', () => {
  let component: Park1Page;
  let fixture: ComponentFixture<Park1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Park1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Park1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
