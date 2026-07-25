import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentForm } from './blog-comment-form';

describe('BlogCommentForm', () => {
  let component: BlogCommentForm;
  let fixture: ComponentFixture<BlogCommentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCommentForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCommentForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
