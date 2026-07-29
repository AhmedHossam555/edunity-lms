import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImage } from './register-image';

describe('RegisterImage', () => {
  let component: RegisterImage;
  let fixture: ComponentFixture<RegisterImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
