import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
})
export class OnlyNumberDirective {
  private regex: RegExp = new RegExp(/^[0-9.,]*$/); // Allow only numbers, comma, and dot
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
  ];

  constructor() {}

  // Listen to the keydown event on the host element
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow special keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Prevent input if it doesn't match the allowed pattern
    const current: string = (event.target as HTMLInputElement).value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
