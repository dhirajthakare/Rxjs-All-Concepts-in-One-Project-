import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css'],
})
export class ReactiveDrivenFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  reactiveForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: [''],
      mobile: [''],
      password: ['', [Validators.required]],
      ConfirmPassword: [''],
    },
    { validator: this.checkPassword }
  );
  ngOnInit(): void {}

  checkPassword(control: AbstractControl): { [key: string]: boolean } | null {
    if (
      control.get('password')?.value !== control.get('ConfirmPassword')?.value
    ) {
      return { checkPassword: true };
    }
    return null;
  }

  save() {
    console.log(this.reactiveForm.value);
  }

  onChangeName() {
    if (this.reactiveForm.get('name')?.value == 'dhiraj') {
      this.reactiveForm.get('email')?.setValidators([Validators.required]);
      this.reactiveForm.get('email')?.updateValueAndValidity();
    } else {
      this.reactiveForm.get('email')?.clearValidators();
      this.reactiveForm.get('email')?.updateValueAndValidity();
    }
  }
}
