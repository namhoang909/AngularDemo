import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieProjectComponent } from './movie-project.component';

describe('MovieProjectComponent', () => {
  let component: MovieProjectComponent;
  let fixture: ComponentFixture<MovieProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
