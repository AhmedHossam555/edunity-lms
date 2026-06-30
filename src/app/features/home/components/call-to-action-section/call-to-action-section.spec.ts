import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionSection } from './call-to-action-section';

describe('CallToActionSection', () => {
  let component: CallToActionSection;
  let fixture: ComponentFixture<CallToActionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToActionSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
