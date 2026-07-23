import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsSkeleton } from './blog-details-skeleton';

describe('BlogDetailsSkeleton', () => {
  let component: BlogDetailsSkeleton;
  let fixture: ComponentFixture<BlogDetailsSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
