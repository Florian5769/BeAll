import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './components/modal/components/user/user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SnackBarService } from './components/snackbar/snackbar';
import { EventComponent } from './event/event.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TokenInterceptorService } from 'src/providers/token-interceptor/token-interceptor.service';
import { ModalComponent } from './components/modal/modal.component';
import { ForgotPasswordComponent } from './components/modal/components/forgot-password/forgot-password.component';
import { SettingsComponent } from './settings/settings.component';
import { SlideOversComponent } from './components/slide-overs/slide-overs.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ArticlesComponent } from './articles/articles.component';
import { DidYouKnewComponent } from './components/modal/components/did-you-knew/did-you-knew.component';
import { ViewDykComponent } from './components/slide-overs/templates/view-dyk/view-dyk.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    SidebarComponent,
    EventComponent,
    TopbarComponent,
    ModalComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    UserModalComponent,
    SlideOversComponent,
    TransactionsComponent,
    ArticlesComponent,
    DidYouKnewComponent,
    ViewDykComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    HttpClientModule,
    SnackBarService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService,
      multi: true, 
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, SlideOversComponent]
})
export class AppModule { }
