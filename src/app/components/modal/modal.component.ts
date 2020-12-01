import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/providers/modal.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public formGroup: FormGroup;

  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    private modalService : ModalActionsService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public modalData: any,) {
      this.formGroup = this.formBuilder.group({
       
      });
  }

  ngOnInit(): void {
  }

  actionFunction() {
    this.modalService.modalAction(this.modalData, this.formGroup);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
