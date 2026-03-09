import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotdoInput } from './totdo-input';

describe('TotdoInput', () => {
  let component: TotdoInput;
  let fixture: ComponentFixture<TotdoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotdoInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotdoInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
