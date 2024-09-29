import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MortgageCalculatorService {
  calculateMonthlyPayment(
    borrowingAmount: number,
    interestRate: number,
    repaymentPeriod: number
  ): number {
    const principal = borrowingAmount;
    const interest = interestRate / 100 / 12;
    const payments = repaymentPeriod * 12;

    // Monthly payment formula
    return (principal * interest) / (1 - Math.pow(1 + interest, -payments));
  }

  calculateDebtToIncome(
    borrowingAmount: number,
    grossIncome: number,
    interestRate: number,
    repaymentPeriod: number
  ): number {
    const monthlyIncome = grossIncome / 12;
    const monthlyPayment = this.calculateMonthlyPayment(
      borrowingAmount,
      interestRate,
      repaymentPeriod
    );

    // Debt to Income Ratio
    return (monthlyPayment / monthlyIncome) * 100;
  }

  calculateLoanToValue(borrowingAmount: number, purchasePrice: number): number {
    // Loan to Value Ratio
    return (borrowingAmount / purchasePrice) * 100;
  }
}
