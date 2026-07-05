import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTagHeader } from './section-tag-header';

describe('SectionTagHeader', () => {
  let component: SectionTagHeader;
  let fixture: ComponentFixture<SectionTagHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTagHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTagHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
