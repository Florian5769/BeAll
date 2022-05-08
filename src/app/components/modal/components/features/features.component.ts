import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() data: any;

  public formBuilder: FormBuilder
  constructor() {}

  ngOnInit(): void {
    this.formGroup.addControl("content", new FormControl('', [Validators.email,Validators.required]));
  }

}
