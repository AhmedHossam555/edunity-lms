import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSiteHeader } from './main-site-header';

describe('MainSiteHeader', () => {
  let component: MainSiteHeader;
  let fixture: ComponentFixture<MainSiteHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSiteHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSiteHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
