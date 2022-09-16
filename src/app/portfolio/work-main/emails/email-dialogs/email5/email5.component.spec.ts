import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Email5Component } from './email5.component';

describe('Email5Component', () => {
  let component: Email5Component;
  let fixture: ComponentFixture<Email5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Email5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Email5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
