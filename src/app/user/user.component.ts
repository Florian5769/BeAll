import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from '../components/snackbar/snackbar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public formInput: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private sbar: SnackBarService
  ) {
    this.formInput = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
    });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  ngOnInit(): void {
    this.http.get(`http://localhost:8000/users`, this.httpOptions).subscribe((resp) => {
      console.log(resp)
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

      this.http.post(`http://localhost:8000/auth/signup`, userToCreate, this.httpOptions).subscribe((resp) => {
        console.log(resp)
        this.sbar.openSnackBar(resp['Message'], 'ok');
      })
    }
  }

}
