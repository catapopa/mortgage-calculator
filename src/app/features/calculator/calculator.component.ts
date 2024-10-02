import { Component } from '@angular/core';
import { MortgageCalculatorService } from 'src/app/services/mortgage-calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  mortgageForm: any;
  mortgageData: any;
  monthlyPayment: number = 0;
  debtToIncome: number = 0;
  loanToValue: number = 0;
  repaymentPeriod: number = 0;

  constructor(private mortgageService: MortgageCalculatorService) {}

  handleMortgageData(data: any) {
    this.mortgageData = data;

    this.monthlyPayment = this.mortgageService.calculateMonthlyPayment(
      data.borrowingAmount,
      data.interestRate,
      data.repaymentPeriod
    );

    this.debtToIncome = this.mortgageService.calculateDebtToIncome(
      data.borrowingAmount,
      data.grossIncome
    );

    this.loanToValue = this.mortgageService.calculateLoanToValue(
      data.borrowingAmount,
      data.purchasePrice
    );

    this.repaymentPeriod = data.repaymentPeriod;
  }

  goBack() {
    throw new Error('Method not implemented.');
  }

  nextStep() {
    throw new Error('Method not implemented.');
  }
}
