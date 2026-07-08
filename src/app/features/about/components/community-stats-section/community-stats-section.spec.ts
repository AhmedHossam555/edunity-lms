import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityStatsSection } from './community-stats-section';

describe('CommunityStatsSection', () => {
  let component: CommunityStatsSection;
  let fixture: ComponentFixture<CommunityStatsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityStatsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityStatsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
