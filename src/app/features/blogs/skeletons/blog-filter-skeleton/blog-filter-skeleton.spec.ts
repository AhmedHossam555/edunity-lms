import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFilterSkeleton } from './blog-filter-skeleton';

describe('BlogFilterSkeleton', () => {
  let component: BlogFilterSkeleton;
  let fixture: ComponentFixture<BlogFilterSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogFilterSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFilterSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
