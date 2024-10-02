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
    this.validateNonNegativeInputs(
      borrowingAmount,
      interestRate,
      repaymentPeriod
    );
    const totalPayments = repaymentPeriod * 12; // Total number of monthly payments

    if (interestRate === 0) {
      return borrowingAmount / totalPayments; // Return equal payments for the duration
    }

    const monthlyInterestRate = interestRate / 100 / 12; // Convert annual interest rate to monthly

    return (
      (borrowingAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))
    );
  }

  calculateDebtToIncome(borrowingAmount: number, grossIncome: number): number {
    this.validateNonNegativeInputs(borrowingAmount, grossIncome);

    return borrowingAmount / grossIncome;
  }

  calculateLoanToValue(borrowingAmount: number, purchasePrice: number): number {
    this.validateNonNegativeInputs(borrowingAmount, purchasePrice);

    return (borrowingAmount / purchasePrice) * 100;
  }

  private validateNonNegativeInputs(...inputs: number[]): void {
    inputs.forEach((input) => {
      if (input < 0) {
        throw new Error(
          `Invalid input value: ${input}. Inputs must be positive numbers.`
        );
      }
    });
  }
}
