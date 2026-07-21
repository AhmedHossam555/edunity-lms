import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFilterSkeleton } from './course-filter-skeleton';

describe('CourseFilterSkeleton', () => {
  let component: CourseFilterSkeleton;
  let fixture: ComponentFixture<CourseFilterSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFilterSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFilterSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
