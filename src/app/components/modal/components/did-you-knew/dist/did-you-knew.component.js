"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DidYouKnewComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DidYouKnewComponent = /** @class */ (function () {
    function DidYouKnewComponent(formBuilder, renderer) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.sports = [
            {
                sportName: "Football",
                image: "http://localhost:3000//static/media/009-soccer-ball.1e4d3f38.svg",
                context: 1
            },
            {
                sportName: "Basketball",
                image: "http://localhost:3000/static/media/044-basketball.c82ebf34.svg",
                context: 2
            },
            {
                sportName: "Tennis",
                image: "http://localhost:3000//static/media/005-tennis-ball.78f3881c.svg",
                context: 4
            },
        ];
        this.selectedSport = {};
        this.setSelectedSport = function (sport) {
            _this.selectedSport = sport;
            _this.formGroup.controls["sport"].setValue(_this.selectedSport["context"]);
            _this.openDropdown();
        };
        this.isOpen = false;
        this.selectedSport = this.sports[0];
        this.renderer.listen("window", "click", function (e) {
            /**
             * Only run when toggleButton is not clicked
             * If we don't check this, all clicks (even on the toggle button) gets into this
             * section which in the result we might never see the menu open!
             * And the menu itself is checked here, and it's where we check just outside of
             * the menu and button the condition abbove must close the menu
             */
            if (!_this.toggleButton.nativeElement.contains(e.target) &&
                !_this.menu.nativeElement.contains(e.target)) {
                _this.isOpen = false;
            }
        });
    }
    DidYouKnewComponent.prototype.ngOnInit = function () {
        this.formGroup.addControl("sport", new forms_1.FormControl(this.selectedSport["context"], [forms_1.Validators.required]));
        this.formGroup.addControl("content", new forms_1.FormControl("", [
            forms_1.Validators.required,
            forms_1.Validators.minLength(1),
        ]));
    };
    DidYouKnewComponent.prototype.openDropdown = function () {
        if (this.isOpen)
            this.isOpen = false;
        else
            this.isOpen = true;
    };
    __decorate([
        core_1.Input()
    ], DidYouKnewComponent.prototype, "formGroup");
    __decorate([
        core_1.Input()
    ], DidYouKnewComponent.prototype, "data");
    __decorate([
        core_1.ViewChild("toggleButton")
    ], DidYouKnewComponent.prototype, "toggleButton");
    __decorate([
        core_1.ViewChild("menu")
    ], DidYouKnewComponent.prototype, "menu");
    DidYouKnewComponent = __decorate([
        core_1.Component({
            selector: "app-did-you-knew",
            templateUrl: "./did-you-knew.component.html",
            styleUrls: ["./did-you-knew.component.scss"]
        })
    ], DidYouKnewComponent);
    return DidYouKnewComponent;
}());
exports.DidYouKnewComponent = DidYouKnewComponent;
