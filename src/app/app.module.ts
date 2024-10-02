import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './features/calculator/calculator.component';
import { MortgageCalculatorFormComponent } from './features/calculator/mortgage-calculator-form/mortgage-calculator-form.component';
import { MortgageCalculatorComponent } from './features/calculator/mortgage-calculator/mortgage-calculator.component';
import { MortgageCalculatorService } from './services/mortgage-calculator.service';
import { CommonModule } from '@angular/common';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MortgageCalculatorFormComponent,
    MortgageCalculatorComponent,
    OnlyNumberDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [MortgageCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
