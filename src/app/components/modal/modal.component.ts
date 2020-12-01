import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/providers/modal.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public step: number;

  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    private modalService : ModalActionsService,
    @Inject(MAT_DIALOG_DATA) public modalData: any,) {
  }

  ngOnInit(): void {
  }

  actionFunction() {
    this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

  nextStep(){

  }

}
