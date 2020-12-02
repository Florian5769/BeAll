import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/providers/modal.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public formGroup: FormGroup;
  @ViewChild('container' , { read: ElementRef }) container: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private modalService: ModalActionsService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private renderer: Renderer2,
  ) {
    this.formGroup = this.formBuilder.group({

    });

    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (this.container.nativeElement.contains(e.target) && !this.modal.nativeElement.contains(e.target)) {
        this.dialogRef.close()
      }
    });
  }

  ngOnInit(): void {
  }

  actionFunction() {
    this.modalService.modalAction(this.modalData, this.formGroup, this.dialogRef);
  }

  closeModal() {
    this.dialogRef.close();
  }

}
