import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule,Validators,FormGroup,FormControl, FormsModule, Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'


@Component({
  selector: 'app-form-feature',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './form-feature.component.html',
  styleUrl: './form-feature.component.css'
})
export class FormFeatureComponent {
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age : new FormControl('',[this.forbiddedAgeValidator(20)]),
  
      street: new FormControl('',[Validators.required, Validators.minLength(6)]),
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
    });

  get f() {
    return this.form.controls;
  }
  
  forbiddedAgeValidator(age:number):ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = age >= control.value;
      return forbidden ? {forbiddenAge: { value: control.value }} : null;

    }
  }


  submit() {
    console.log(this.form.value);
  }

}
