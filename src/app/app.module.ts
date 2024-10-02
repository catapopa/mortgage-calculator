import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { MortgageCalculatorFormComponent } from './features/calculator/mortgage-calculator-form/mortgage-calculator-form.component';
import { MortgageCalculatorComponent } from './features/calculator/mortgage-calculator/mortgage-calculator.component';
import { MortgageCalculatorService } from './services/mortgage-calculator.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MortgageCalculatorFormComponent,
    MortgageCalculatorComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [MortgageCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
