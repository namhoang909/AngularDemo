import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTheaterComponent } from './detail-theater.component';

describe('DetailTheaterComponent', () => {
  let component: DetailTheaterComponent;
  let fixture: ComponentFixture<DetailTheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
