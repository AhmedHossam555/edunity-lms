import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardSkeleton } from './blog-card-skeleton';

describe('BlogCardSkeleton', () => {
  let component: BlogCardSkeleton;
  let fixture: ComponentFixture<BlogCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
