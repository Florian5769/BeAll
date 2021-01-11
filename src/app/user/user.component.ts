import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserModel } from '../api/models';
import { SlideOversComponent } from '../components/slide-overs/slide-overs.component';
import { SnackBarService } from '../components/snackbar/snackbar';
import { UserService } from "../api/providers/user.service"


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private formInput: FormGroup;
  public isLoading: boolean;
  public showFilter: boolean;
  users: UserModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private sbar: SnackBarService,
    public matDialog: MatDialog,
    public UserService: UserService
  ) {
    this.formInput = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
    });
    this.isLoading = false
    this.showFilter = false
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.UserService.getUsers().toPromise().then(
      (data) => {
        this.isLoading = false;
        if (!data) {
          return
        } else {
          this.users = data as UserModel[];
          return;
        }
      },
      // error => { this.isLoading = false; this.snbar.openSnackBar(error.message, 'OK') }
    )
  }

  createUser() {
    if (this.formInput.valid) {
      const userToCreate = {
        "username": this.formInput.value.username,
        "password": this.formInput.value.password,
        "lastname": this.formInput.value.lastname,
        "firstname": this.formInput.value.firstname,
        "email": this.formInput.value.email
      }

      this.http.post(`http://localhost:8100/auth/signup`, userToCreate, this.httpOptions).subscribe((resp) => {
        this.sbar.openSnackBar(resp['Message'], 'ok');
      })
    }
  }

  openSlideOverUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.data = {
      name: "update-user",
      title: "User modal",
      description: "If you continue, the product with ID will be deleted.",
      actionButtonText: "Delete",
      confirmText: "Modifier",
      productId: "test",
      template: 2,
      loading: false,
      step: 0,
      errors: {
        email: false,
        password: false,
        confirmPassword: false,
        token: false,
      },
      bite: "tabite"
    }
    this.matDialog.open(SlideOversComponent, dialogConfig);
  }

  openFilters() {
    this.showFilter = !this.showFilter
  }

}
