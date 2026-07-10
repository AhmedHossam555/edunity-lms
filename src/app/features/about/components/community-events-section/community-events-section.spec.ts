import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityEventsSection } from './community-events-section';

describe('CommunityEventsSection', () => {
  let component: CommunityEventsSection;
  let fixture: ComponentFixture<CommunityEventsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityEventsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityEventsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
