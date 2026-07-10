import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsSection } from './instructors-section';

describe('InstructorsSection', () => {
  let component: InstructorsSection;
  let fixture: ComponentFixture<InstructorsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
