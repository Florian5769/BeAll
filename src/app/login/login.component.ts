/*
 * File: login.component.ts                                                    *
 * Project: erp                                                                *
 * Created Date: Su Apr yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Sun Apr 25 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */



import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarService } from '../components/snackbar/snackbar';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../api/providers/auth.service';
import { CheckCredentialModel } from '../api/models/check-creadential.model';
import { LoginResponseModel } from '../api/models/login-response.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { ElectronService } from 'src/providers/electron.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public isLoading = false;
  public usernameError = false;
  public passwordError = false;
  public errMessage = "";
  public snackConfig: MatSnackBarConfig = { duration: 8000 };
  public formInput: FormGroup;
  public showModal: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private snbar: SnackBarService,
    private cookieServ: CookieService,
    private authService: AuthService,
    public matDialog: MatDialog,
    public ES: ElectronService
  ) {
    this.formInput = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this.cd.detectChanges();
    const { remote } = window.require('electron');
    remote.getCurrentWindow().setResizable(false);
  }

  login(): void {

    if (this.formInput.valid) {
      this.isLoading = true;
      const credential: CheckCredentialModel = {
        username: this.formInput.value.username.toLowerCase(),
        password: this.formInput.value.password
      }

      this.authService.postAuthLogin(credential).toPromise().then(
        (resp: LoginResponseModel) => {
          this.isLoading = false;
          this.errMessage = resp.Message;
          if (!resp) {
            this.usernameError = true;
            this.passwordError = true;
            this.snbar.openSnackBar(this.errMessage, 'OK')
            return
          }
          console.log(this.ES.isElectron());
          //we set the cookie
          this.cookieServ.set('tokens', resp.token);

          //go to dashboard
          this.router.navigateByUrl('/dashboard');
          localStorage.setItem("user", JSON.stringify(resp));


          //maximize the window
          const { remote } = window.require('electron');
          remote.getCurrentWindow().maximize();
          remote.getCurrentWindow().setResizable(true);

          return;
        },
        error => { this.isLoading = false; this.snbar.openSnackBar(error.message, 'OK') }
      )
    }
  }

  showModalResetPass() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.data = {
      name: "generate-code",
      title: "Mot de passe oublié",
      description: "If you continue, the product with ID will be deleted.",
      actionButtonText: "Delete",
      confirmText: "Confitm",
      productId: "test",
      template: "forgotPassword",
      loading: false,
      step: 0,
      errors: {
        email: false,
        password: false,
        confirmPassword: false,
        token: false,
      },
    };

    this.matDialog.open(ModalComponent, dialogConfig);
  };

  hideModalResetPass() {
    this.showModal = false;
  }

}
