import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';
import { FormsModule } from '@angular/forms';

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageCalculatorFormComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
