"use strict";
/*
 * File: app.module.ts                                                         *
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
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var animations_1 = require("@angular/platform-browser/animations");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var snack_bar_1 = require("@angular/material/snack-bar");
var user_component_1 = require("./user/user.component");
var user_component_2 = require("./components/modal/components/user/user.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var snackbar_1 = require("./components/snackbar/snackbar");
var event_component_1 = require("./event/event.component");
var topbar_component_1 = require("./components/topbar/topbar.component");
var token_interceptor_service_1 = require("src/providers/token-interceptor/token-interceptor.service");
var modal_component_1 = require("./components/modal/modal.component");
var forgot_password_component_1 = require("./components/modal/components/forgot-password/forgot-password.component");
var settings_component_1 = require("./settings/settings.component");
var slide_overs_component_1 = require("./components/slide-overs/slide-overs.component");
var transactions_component_1 = require("./transactions/transactions.component");
var articles_component_1 = require("./articles/articles.component");
var did_you_knew_component_1 = require("./components/modal/components/did-you-knew/did-you-knew.component");
var view_dyk_component_1 = require("./components/slide-overs/templates/view-dyk/view-dyk.component");
var article_component_1 = require("./article/article.component");
var textarea_autoresize_directive_1 = require("./directives/textarea-autoresize.directive");
var features_component_1 = require("./components/modal/components/features/features.component");
// import { ElectronService } from 'src/providers/electron.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                user_component_1.UserComponent,
                sidebar_component_1.SidebarComponent,
                event_component_1.EventComponent,
                topbar_component_1.TopbarComponent,
                modal_component_1.ModalComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                settings_component_1.SettingsComponent,
                user_component_2.UserModalComponent,
                slide_overs_component_1.SlideOversComponent,
                transactions_component_1.TransactionsComponent,
                articles_component_1.ArticlesComponent,
                did_you_knew_component_1.DidYouKnewComponent,
                view_dyk_component_1.ViewDykComponent,
                article_component_1.ArticleComponent,
                textarea_autoresize_directive_1.TextareaAutoresizeDirective,
                features_component_1.FeaturesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                snack_bar_1.MatSnackBarModule,
                common_1.CommonModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA,
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                http_1.HttpClientModule,
                snackbar_1.SnackBarService,
                // ElectronService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [modal_component_1.ModalComponent, slide_overs_component_1.SlideOversComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
