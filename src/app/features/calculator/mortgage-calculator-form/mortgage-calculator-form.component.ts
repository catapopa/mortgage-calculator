import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator-form',
  templateUrl: './mortgage-calculator-form.component.html',
  styleUrls: ['./mortgage-calculator-form.component.scss'],
})
export class MortgageCalculatorFormComponent {
  @Output() mortgageData = new EventEmitter<any>();

  mortgage = {
    borrowingAmount: null,
    purchasePrice: null,
    repaymentPeriod: null,
    grossIncome: null,
    interestRate: null,
  };

  readonly repaymentPeriods: number[] = [10, 15, 20, 25, 30];

  onSubmit(form: any) {
    if (form.valid) {
      this.mortgageData.emit(this.mortgage);
    }
  }
}
