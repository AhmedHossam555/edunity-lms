import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchSkeleton } from './blog-search-skeleton';

describe('BlogSearchSkeleton', () => {
  let component: BlogSearchSkeleton;
  let fixture: ComponentFixture<BlogSearchSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSearchSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
