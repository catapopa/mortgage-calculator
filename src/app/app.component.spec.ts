import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { MortgageCalculatorFormComponent } from './features/calculator/mortgage-calculator-form/mortgage-calculator-form.component';
import { MortgageCalculatorComponent } from './features/calculator/mortgage-calculator/mortgage-calculator.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MortgageCalculatorComponent,
        CalculatorComponent,
        MortgageCalculatorFormComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
