import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteFooter } from './main-site-footer';

describe('MainSiteFooter', () => {
  let component: MainSiteFooter;
  let fixture: ComponentFixture<MainSiteFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSiteFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSiteFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
