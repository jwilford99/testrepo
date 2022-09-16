import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJeremyComponent } from './about-jeremy.component';

describe('AboutJeremyComponent', () => {
  let component: AboutJeremyComponent;
  let fixture: ComponentFixture<AboutJeremyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutJeremyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJeremyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
