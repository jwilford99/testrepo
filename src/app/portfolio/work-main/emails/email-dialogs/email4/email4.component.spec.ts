import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email4Component } from './email4.component';

describe('Email4Component', () => {
  let component: Email4Component;
  let fixture: ComponentFixture<Email4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
