import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlideActionsService } from 'src/providers/slide.service';

@Component({
  selector: 'app-slide-overs',
  templateUrl: './slide-overs.component.html',
  styleUrls: ['./slide-overs.component.scss']
})
export class SlideOversComponent implements OnInit {

  @ViewChild('container' , { read: ElementRef }) container: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  public finishOpen : boolean;
  
  constructor(
    public dialogRef: MatDialogRef<SlideOversComponent>,
    private slideService: SlideActionsService,
    @Inject(MAT_DIALOG_DATA) public slideData: any,
    private renderer: Renderer2,
  ) {
    this.finishOpen = false;
    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (this.container.nativeElement.contains(e.target) && !this.modal.nativeElement.contains(e.target)) {
        this.closeModal()
      }
    });
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.finishOpen = true;
    },300)
  }

  closeModal() {
    this.dialogRef.close();
  }

}
