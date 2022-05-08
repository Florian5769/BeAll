"use strict";
/*
 * File: dashboard.component.ts                                                *
 * Project: erp                                                                *
 * Created Date: Mo Apr yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Wed May 26 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
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
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var modal_component_1 = require("../components/modal/modal.component");
var slide_overs_component_1 = require("../components/slide-overs/slide-overs.component");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(matDialog, Dyk, Article, Alpha, snbar) {
        var _this = this;
        this.matDialog = matDialog;
        this.Dyk = Dyk;
        this.Article = Article;
        this.Alpha = Alpha;
        this.snbar = snbar;
        this.datas = [];
        this.categories = [];
        this.values = [];
        this.addvalue = function () {
            _this.values.push({ value: "" });
        };
        this.saveValues = function () {
            _this.Article.postCategorie(_this.values)
                .toPromise()
                .then(function (result) {
                console.log(result);
            });
            console.info(_this.values);
        };
        this.getDidYouKnew = function (id) {
            _this.Dyk.getDidYouKnew(id)
                .toPromise()
                .then(function (result) {
                if (result) {
                    var dialogConfig = new dialog_1.MatDialogConfig();
                    dialogConfig.id = "slide-over";
                    console.log(result);
                    dialogConfig.data = {
                        title: "Le saviez-vous ?",
                        profilImage: result.userImage,
                        roles: result.roles,
                        firstname: result.firstname,
                        lastname: result.lastname,
                        email: result.email,
                        username: result.username,
                        dyk: result.dyk,
                        template: "viewDyk"
                    };
                    var dialog = _this.matDialog.open(slide_overs_component_1.SlideOversComponent, dialogConfig);
                }
            });
        };
        this.getDidYouKnews = function () {
            _this.Dyk.getDidYouKnews()
                .toPromise()
                .then(function (result) {
                result.length > 0 ? (_this.datas = result) : false;
            });
        };
        this.getCategoriesArticle = function () {
            _this.Article.getCategories()
                .toPromise()
                .then(function (result) {
                result.length > 0 ? (_this.categories = result) : false;
            });
        };
        this.openModal = function () {
            var dialogConfig = new dialog_1.MatDialogConfig();
            dialogConfig.id = "modal-component";
            dialogConfig.data = {
                name: "create-did-you-knew",
                title: "Créer 'Le saviez-vous ?'",
                description: "Créer le saviez-vous.",
                actionButtonText: "Delete",
                confirmText: "Confirmer",
                productId: "test",
                template: "createDyk",
                loading: false,
                errors: {
                    content: false,
                    sport: false
                }
            };
            var dialog = _this.matDialog.open(modal_component_1.ModalComponent, dialogConfig);
            dialog.afterClosed().subscribe(function () {
                _this.getDidYouKnews();
            });
        };
        this.openModalFeatures = function () {
            var dialogConfig = new dialog_1.MatDialogConfig();
            dialogConfig.id = "modal-component";
            dialogConfig.data = {
                name: "features",
                title: "ChangeLogs",
                description: "Ajouter les nouveauté de l'application public",
                actionButtonText: "Delete",
                confirmText: "Confirmer",
                productId: "test",
                template: "features",
                loading: false,
                errors: {
                    content: false,
                    sport: false
                }
            };
            var dialog = _this.matDialog.open(modal_component_1.ModalComponent, dialogConfig);
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getDidYouKnews();
        this.getCategoriesArticle();
    };
    DashboardComponent.prototype.removevalue = function (i) {
        this.values.splice(i, 1);
    };
    DashboardComponent.prototype.deleteDidYouKnew = function (id) {
        var _this = this;
        this.Dyk.deleteDidYouKnew(id)
            .toPromise()
            .then(function (result) {
            if (result.deleted === true) {
                _this.snbar.openSnackBar("L'article à bien été supprimé", "OK");
                _this.getDidYouKnews();
            }
            else {
                _this.snbar.openSnackBar("Problème lors de la suppression", "OK");
            }
        });
    };
    DashboardComponent.prototype.hideModal = function () {
        this.showModal = false;
    };
    DashboardComponent.prototype.sendAlphaMail = function () {
        this.Alpha.sendAlphaMail()
            .toPromise()
            .then(function (result) { return console.log(result); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "app-dashboard",
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.scss"]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
