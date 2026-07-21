import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchSkeleton } from './course-search-skeleton';

describe('CourseSearchSkeleton', () => {
  let component: CourseSearchSkeleton;
  let fixture: ComponentFixture<CourseSearchSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSearchSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSearchSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
