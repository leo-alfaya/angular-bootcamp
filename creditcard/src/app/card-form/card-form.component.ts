import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  nameControl = this.cardForm.controls.name as FormControl;
  cardNumberControl = this.cardForm.controls.cardNumber as FormControl;
  expirationControl = this.cardForm.controls.expiration as FormControl;
  securityCodeControl = this.cardForm.controls.securityCode as FormControl;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form was submitted');
  }

  onResetClick() {
    this.cardForm.reset()
  }
}
