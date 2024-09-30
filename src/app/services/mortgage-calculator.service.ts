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
    const monthlyInterestRate = interestRate / 100 / 12; // Convert annual interest rate to monthly
    const totalPayments = repaymentPeriod * 12; // Total number of monthly payments

    return (
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))
    );
  }

  calculateDebtToIncome(
    borrowingAmount: number,
    grossIncome: number,
    interestRate: number,
    repaymentPeriod: number
  ): number {
    const monthlyIncome = grossIncome / 12; // Convert annual income to monthly
    const monthlyPayment = this.calculateMonthlyPayment(
      borrowingAmount,
      interestRate,
      repaymentPeriod
    );

    return (monthlyPayment / monthlyIncome) * 100;
  }

  calculateLoanToValue(borrowingAmount: number, purchasePrice: number): number {
    return borrowingAmount / purchasePrice;
  }
}
