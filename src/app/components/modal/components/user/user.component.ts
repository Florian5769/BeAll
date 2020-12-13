import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserModalComponent implements OnInit {
  @Input() data: any;
  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
