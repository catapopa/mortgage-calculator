import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { MortgageCalculatorFormComponent } from './mortgage-calculator-form/mortgage-calculator-form.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent,
        MortgageCalculatorFormComponent,
        MortgageCalculatorComponent,
      ],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
