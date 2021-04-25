/*
 * File: did-you-knew.component.ts                                             *
 * Project: erp                                                                *
 * Created Date: Su Apr yyyy                                                   *
 * Author: <<author>                                                           *
 * -----                                                                       *
 * Last Modified: Mon Apr 19 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 Bodkin World Domination Enterprises                      *
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
  Input,
} from "@angular/core";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SportModel } from "src/app/api/models/sport.model";

@Component({
  selector: "app-did-you-knew",
  templateUrl: "./did-you-knew.component.html",
  styleUrls: ["./did-you-knew.component.scss"],
})
export class DidYouKnewComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() data: any;
  @ViewChild("toggleButton") toggleButton: ElementRef;
  @ViewChild("menu") menu: ElementRef;

  public isOpen: boolean;
  public sports: SportModel[] = [
    {
      sportName: "Football",
      image: "http://localhost:3000//static/media/009-soccer-ball.1e4d3f38.svg",
      context: 1,
    },
    {
      sportName: "Basketball",
      image: "http://localhost:3000/static/media/044-basketball.c82ebf34.svg",
      context: 2,
    },
    {
      sportName: "Tennis",
      image: "http://localhost:3000//static/media/005-tennis-ball.78f3881c.svg",
      context: 4,
    },
  ];

  public selectedSport = {};

  constructor(public formBuilder: FormBuilder, private renderer: Renderer2) {
    this.isOpen = false;
    this.selectedSport = this.sports[0];
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
    this.formGroup.addControl(
      "sport",
      new FormControl(this.selectedSport["context"], [Validators.required])
    );
    this.formGroup.addControl(
      "content",
      new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ])
    );
  }

  openDropdown() {
    if (this.isOpen) this.isOpen = false;
    else this.isOpen = true;
  }

  setSelectedSport = (sport) => {
    this.selectedSport = sport;
    this.formGroup.controls["sport"].setValue(this.selectedSport["context"]);
    this.openDropdown()
  };
}
