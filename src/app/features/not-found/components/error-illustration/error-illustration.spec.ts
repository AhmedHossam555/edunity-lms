import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorIllustration } from './error-illustration';

describe('ErrorIllustration', () => {
  let component: ErrorIllustration;
  let fixture: ComponentFixture<ErrorIllustration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorIllustration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorIllustration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
