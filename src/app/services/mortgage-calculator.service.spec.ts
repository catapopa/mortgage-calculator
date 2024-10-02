import { TestBed } from '@angular/core/testing';
import { MortgageCalculatorService } from './mortgage-calculator.service';

describe('MortgageCalculatorService', () => {
  let service: MortgageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageCalculatorService);
  });

  it('should calculate the correct monthly mortgage payment', () => {
    const borrowingAmount = 826800;
    const interestRate = 3.65;
    const repaymentPeriod = 30;

    const expectedPayment = 3782.28;

    const result = service.calculateMonthlyPayment(
      borrowingAmount,
      interestRate,
      repaymentPeriod
    );

    expect(result).toBeCloseTo(expectedPayment, 2);
  });

  it('should calculate the correct Debt-to-Income ratio (DTI)', () => {
    const borrowingAmount = 826800;
    const grossIncome = 225000;

    const expectedDTI = 3.67;

    const result = service.calculateDebtToIncome(borrowingAmount, grossIncome);

    expect(result).toBeCloseTo(expectedDTI, 2);
  });

  it('should calculate the correct Loan-to-Value ratio (LTV)', () => {
    const borrowingAmount = 826800;
    const purchasePrice = 910000;

    const expectedLTV = 90.86;

    const result = service.calculateLoanToValue(borrowingAmount, purchasePrice);

    expect(result).toBeCloseTo(expectedLTV, 2);
  });

  it('should handle zero interest rate for monthly payment', () => {
    const borrowingAmount = 826800;
    const interestRate = 0;
    const repaymentPeriod = 30;

    const expectedPayment = borrowingAmount / (repaymentPeriod * 12);

    const result = service.calculateMonthlyPayment(
      borrowingAmount,
      interestRate,
      repaymentPeriod
    );

    expect(result).toBeCloseTo(expectedPayment, 2);
  });

  it('should throw error when passing negative borrowing amount', () => {
    const borrowingAmount = -826800;
    const grossIncome = 225000;

    expect(() =>
      service.calculateDebtToIncome(borrowingAmount, grossIncome)
    ).toThrowError();
  });

  it('should throw error when passing negative purchase price for LTV', () => {
    const borrowingAmount = 826800;
    const purchasePrice = -910000;

    expect(() =>
      service.calculateLoanToValue(borrowingAmount, purchasePrice)
    ).toThrowError();
  });
});
