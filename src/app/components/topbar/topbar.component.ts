/*
 * File: topbar.component.ts                                                   *
 * Project: erp                                                                *
 * Created Date: Mo Nov yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Thu May 27 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2020 - 2021 BeAll                                             *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { UserModel } from "src/app/api/models";
import { AuthService } from "src/providers/auth/auth.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  @ViewChild("toggleButton") toggleButton: ElementRef;
  @ViewChild("menu") menu: ElementRef;

  public isOpen: boolean;
  public user: UserModel;
  public userImage: string;
  themeColor = "light-theme";

  constructor(private renderer: Renderer2, private authService: AuthService) {
    this.isOpen = false;
    this.user = JSON.parse(localStorage.getItem("user"));

    this.renderer.listen("window", "click", (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (
        !this.toggleButton.nativeElement.contains(e.target) &&
        !this.menu.nativeElement.contains(e.target)
      ) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {
    this.setDefaultTheme()
  }

  openDropdown() {
    if (this.isOpen) this.isOpen = false;
    else this.isOpen = true;
  }

  logout() {
    this.authService.logout();
  }

  setDefaultTheme = () => {
    // if theme is stored in storage - use it

    if (localStorage.getItem("pxTheme")) {
      //set theme color to one from storage
      this.themeColor = localStorage.getItem("pxTheme");

      //add that class to body
      const body = document.getElementsByTagName("body")[0];
      body.classList.add(this.themeColor);
    }
  }

  themeSwitcher() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove(this.themeColor);

    // switch theme
    this.themeColor == "light-theme"
      ? (this.themeColor = "dark-theme")
      : (this.themeColor = "light-theme");

    body.classList.add(this.themeColor);

    //save it to local storage

    localStorage.setItem("pxTheme", this.themeColor);
  }
}
