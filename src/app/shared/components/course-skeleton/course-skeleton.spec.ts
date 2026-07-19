import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSkeleton } from './course-skeleton';

describe('CourseSkeleton', () => {
  let component: CourseSkeleton;
  let fixture: ComponentFixture<CourseSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
