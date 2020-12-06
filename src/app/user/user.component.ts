import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserModel } from '../api/models';
import { ModalComponent } from '../components/modal/modal.component';
import { SnackBarService } from '../components/snackbar/snackbar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private formInput: FormGroup;
  public users: UserModel;
  public isLoading :boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private sbar: SnackBarService,
    public matDialog: MatDialog
  ) {
    this.formInput = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
    });
    this.isLoading = false
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get(`http://localhost:8100/api/users`, this.httpOptions).subscribe((resp: UserModel) => {
      this.users = resp
      this.isLoading = false
    })
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

  openModalUser() {
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
      }
    }
    this.matDialog.open(ModalComponent, dialogConfig);
  }

}
