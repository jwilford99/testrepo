import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email8Component } from './email8.component';

describe('Email8Component', () => {
  let component: Email8Component;
  let fixture: ComponentFixture<Email8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
