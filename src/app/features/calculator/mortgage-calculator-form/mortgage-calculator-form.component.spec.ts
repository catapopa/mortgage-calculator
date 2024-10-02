import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageCalculatorFormComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should keep the mortgage object updated with user input', () => {
    const borrowingAmountInput = fixture.debugElement.query(
      By.css('input[name="borrowingAmount"]')
    );
    const purchasePriceInput = fixture.debugElement.query(
      By.css('input[name="purchasePrice"]')
    );
    const grossIncomeInput = fixture.debugElement.query(
      By.css('input[name="grossIncome"]')
    );
    const interestRateInput = fixture.debugElement.query(
      By.css('input[name="interestRate"]')
    );
    const repaymentPeriodSelect = fixture.debugElement.query(
      By.css('select[name="repaymentPeriod"]')
    );

    borrowingAmountInput.nativeElement.value = 826800;
    borrowingAmountInput.nativeElement.dispatchEvent(new Event('input'));

    purchasePriceInput.nativeElement.value = 910000;
    purchasePriceInput.nativeElement.dispatchEvent(new Event('input'));

    grossIncomeInput.nativeElement.value = 225000;
    grossIncomeInput.nativeElement.dispatchEvent(new Event('input'));

    interestRateInput.nativeElement.value = 3.65;
    interestRateInput.nativeElement.dispatchEvent(new Event('input'));

    repaymentPeriodSelect.nativeElement.value = 30;
    repaymentPeriodSelect.nativeElement.dispatchEvent(new Event('change'));

    expect(component.mortgage.borrowingAmount).toEqual(826800);
    expect(component.mortgage.purchasePrice).toEqual(910000);
    expect(component.mortgage.grossIncome).toEqual(225000);
    expect(component.mortgage.interestRate).toEqual(3.65);
    expect(Number(component.mortgage.repaymentPeriod)).toEqual(30);
  });
});
