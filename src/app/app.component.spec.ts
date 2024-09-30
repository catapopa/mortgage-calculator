import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { MortgageCalculatorFormComponent } from './features/calculator/mortgage-calculator-form/mortgage-calculator-form.component';
import { MortgageCalculatorComponent } from './features/calculator/mortgage-calculator/mortgage-calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MortgageCalculatorComponent,
        CalculatorComponent,
        MortgageCalculatorFormComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
