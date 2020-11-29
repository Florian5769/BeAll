import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/providers/auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  public isOpen: boolean;

  constructor(
    private renderer: Renderer2,
    private authService : AuthService
  ) {
    this.isOpen = false;
    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (!this.toggleButton.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {
  }

  openDropdown() {
    if (this.isOpen) this.isOpen = false;
    else this.isOpen = true
  }

  logout() {
      this.authService.logout()
  }

}
