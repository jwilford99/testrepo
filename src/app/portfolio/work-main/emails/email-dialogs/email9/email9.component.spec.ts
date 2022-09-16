import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email9Component } from './email9.component';

describe('Email9Component', () => {
  let component: Email9Component;
  let fixture: ComponentFixture<Email9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
