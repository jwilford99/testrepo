import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email10Component } from './email10.component';

describe('Email10Component', () => {
  let component: Email10Component;
  let fixture: ComponentFixture<Email10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
