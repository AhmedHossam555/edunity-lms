import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSection } from './blogs-section';

describe('BlogsSection', () => {
  let component: BlogsSection;
  let fixture: ComponentFixture<BlogsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
