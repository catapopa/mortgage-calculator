import { Component } from '@angular/core';
import { Mortgage } from 'src/app/models/mortgage';
import { MortgageCalculatorService } from 'src/app/services/mortgage-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  mortgageForm: any;
  goBack() {
    throw new Error('Method not implemented.');
  }
  mortgageData: any;
  monthlyPayment: number = 0;
  debtToIncome: number = 0;
  loanToValue: number = 0;
  term: number = 0;

  constructor(private mortgageService: MortgageCalculatorService) {}

  handleMortgageData(data: any) {
    this.mortgageData = data;

    // Call the service to perform calculations
    this.monthlyPayment = this.mortgageService.calculateMonthlyPayment(
      data.borrowingAmount,
      data.interestRate,
      data.repaymentPeriod
    );

    this.debtToIncome = this.mortgageService.calculateDebtToIncome(
      data.borrowingAmount,
      data.grossIncome,
      data.interestRate,
      data.repaymentPeriod
    );

    this.loanToValue = this.mortgageService.calculateLoanToValue(
      data.borrowingAmount,
      data.purchasePrice
    );

    this.term = data.repaymentPeriod;
  }
}
