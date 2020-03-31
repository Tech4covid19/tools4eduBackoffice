import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsListComponent } from './testimonialsList.component';

describe('TestimonialComponent', () => {
  let component: TestimonialsListComponent;
  let fixture: ComponentFixture<TestimonialsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
