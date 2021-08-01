import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl | undefined;
  @Input() label: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    if (this.control) {
      const { dirty, touched, errors } = this.control;
      return dirty && touched && errors;
    }

    return false;
  }
}
