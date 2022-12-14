import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'passwordGenr';
  length = 0;
  changeLetters = false;
  changeNumbers = false;
  changeSymbols = false;
  Password: string = '';
  onChangeLength(event: Event) {
    const parsedvalue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedvalue)) {
      this.length = parsedvalue;
    } else {
      console.log('Enter only digit 0-9');
    }
  }
  onChangeLetters() {
    this.changeLetters = !this.changeLetters;
  }
  onChangeNumbers() {
    this.changeNumbers = !this.changeNumbers;
  }
  onChangeSymbols() {
    this.changeSymbols = !this.changeSymbols;
  }
  onClick() {
    // console.log(
    //   `Letter ${this.changeLetters}, Number ${this.changeNumbers}, Symbols ${this.changeSymbols}`
    // );
    var number = 1234567890;
    var letter = 'abcdefghijklmnopqrstuvwxyz';
    var symbol = '!@#$%^&*()';
    let validChars = '';
    if (this.changeLetters) {
      validChars += letter;
    }
    if (this.changeNumbers) {
      validChars += number;
    }
    if (this.changeSymbols) {
      validChars += symbol;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      var index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.Password = generatedPassword;
  }
}
