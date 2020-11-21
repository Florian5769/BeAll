import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public usernameError = false;
  public passwordError = false;
  formInput: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.formInput = this.formBuilder.group({
      username: [''],
      password: ['']
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
      const credential = {
        "username": this.formInput.value.username,
        "password": this.formInput.value.password
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };

      this.http.post(`http://localhost:8000/auth/login`, credential, httpOptions).subscribe((resp) => {
        console.log(resp)
        this.isLoading = false;
        if (resp["Status"] != "200") {
            this.usernameError = true;
            this.passwordError = true;
            return
        }else{
          this.router.navigateByUrl('/dashboard');
          const { remote } = window.require('electron');
          remote.getCurrentWindow().maximize();
          remote.getCurrentWindow().setResizable(true)
          return;
        }
      })
    }

  }

}
