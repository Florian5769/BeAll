import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() data;

  constructor(
    public formBuilder: FormBuilder
  ) {

   }

  ngOnInit(): void {
    this.formGroup.addControl("email", new FormControl('', [Validators.email,Validators.required]));
    this.formGroup.addControl("code", new FormControl('', [Validators.required]));
    this.formGroup.addControl("password", new FormControl('', [Validators.required]));
    this.formGroup.addControl("confirm-password", new FormControl('', [Validators.required]));
  }

}
