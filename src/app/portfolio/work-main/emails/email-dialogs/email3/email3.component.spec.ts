import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email3Component } from './email3.component';

describe('Email3Component', () => {
  let component: Email3Component;
  let fixture: ComponentFixture<Email3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
