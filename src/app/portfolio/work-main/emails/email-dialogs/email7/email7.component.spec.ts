import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email7Component } from './email7.component';

describe('Email7Component', () => {
  let component: Email7Component;
  let fixture: ComponentFixture<Email7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
