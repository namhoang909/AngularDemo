import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageSystemComponent } from './detail-page-system.component';

describe('DetailPageSystemComponent', () => {
  let component: DetailPageSystemComponent;
  let fixture: ComponentFixture<DetailPageSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
