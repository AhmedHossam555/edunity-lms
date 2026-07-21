import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOverview } from './course-overview';

describe('CourseOverview', () => {
  let component: CourseOverview;
  let fixture: ComponentFixture<CourseOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
