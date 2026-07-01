import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamPreparationSection } from './exam-preparation-section';

describe('ExamPreparationSection', () => {
  let component: ExamPreparationSection;
  let fixture: ComponentFixture<ExamPreparationSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamPreparationSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamPreparationSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
