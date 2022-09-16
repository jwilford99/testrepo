import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email6Component } from './email6.component';

describe('Email6Component', () => {
  let component: Email6Component;
  let fixture: ComponentFixture<Email6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
