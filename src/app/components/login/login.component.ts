import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Validation from '../../common1/validation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reg: FormGroup = new FormGroup({
    fullname: new FormControl<String>(''),
    username: new FormControl<String>(''),
    mobile: new FormControl<String>(''),
    email: new FormControl<String>(''),
    password: new FormControl<String>(''),
    confirmPassword: new FormControl<String>(''),
    acceptTerms: new FormControl<Boolean>(false),
    dob:new FormControl<String>(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reg = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        mobile: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern("^[0-9]*$")
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        dob:[
          '',
          [
            Validators.required,
            this.dateValidator
          ]
        ]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reg.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.reg.invalid) {
      return;
    }

    console.log(JSON.stringify(this.reg.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.reg.reset();
  }
  dateValidator(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === "string") {
      // let match = value.match(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
      let match = value.match(/^\d{2}([./-])\d{2}\1\d{4}$/);
      if (!match) {
        return { 'dateInvalid': true };
      } else if (match && match[0] !== value) {
        return { 'dateInvalid': true };
      }
    }
    return null as any;
  }

}
