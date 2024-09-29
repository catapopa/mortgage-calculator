import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageCalculatorFormComponent]
    });
    fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
