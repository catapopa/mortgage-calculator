import { Component, Input } from '@angular/core';
import { Mortgage } from 'src/app/models/mortgage';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
})
export class MortgageCalculatorComponent {
  @Input() monthlyPayment: number = 0;
  @Input() debtToIncome: number = 0;
  @Input() loanToValue: number = 0;
  // add term

  infoText: string =
    'Here’s our estimate of your monthly mortgage repayments. In general, the maximum amount you can borrow is 4.5x your joint income and you need to have at least 10% of the value of the property saved as a deposit for lenders to accept your application.';
}
