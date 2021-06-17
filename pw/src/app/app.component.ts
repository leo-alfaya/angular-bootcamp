import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }

    this.password = '';
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    this.password = '';
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    this.password = '';
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    this.password = '';
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
