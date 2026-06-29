import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCoursesSection } from './featured-courses-section';

describe('FeaturedCoursesSection', () => {
  let component: FeaturedCoursesSection;
  let fixture: ComponentFixture<FeaturedCoursesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCoursesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCoursesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
