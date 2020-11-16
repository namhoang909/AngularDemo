import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSystemComponent } from './theater-system.component';

describe('TheaterSystemComponent', () => {
  let component: TheaterSystemComponent;
  let fixture: ComponentFixture<TheaterSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
