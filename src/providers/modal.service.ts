import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/api/models';
import { LoginResponseModel } from 'src/app/api/models/login-response.model';
import { AuthService } from 'src/app/api/providers/auth.service';
import { SnackBarService } from 'src/app/components/snackbar/snackbar';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(
    private snbar: SnackBarService,
    private authService: AuthService
  ) { }

  //modalData, formData, ref for close the modal
  modalAction(modalData: any, form, ref) {
    switch (modalData.name) {
      case "generate-code":
        this.generateCode(modalData, form);
        break;

      case "save-new-password":
        this.saveNewPassWord(modalData, form, ref);
        break;

      default: alert("action doesnt exist")
        break;
    }
  }

  private generateCode(modalData, form) {
    if (!form.controls.email.errors) {
      modalData.loading = true;
      const email: UserModel = {
        email: form.controls.email.value
      }
      this.authService.postGenerateCode(email).toPromise().then((result: LoginResponseModel) => {
        if (result.Status != 404) {
          modalData.step += 1;
          modalData.confirmText = "Confirmer"
          modalData.name = "save-new-password"

        } else {
          modalData.errors.email = true;
        }

        this.snbar.openSnackBar(result.Message, "Ok")
      })
      modalData.loading = false;
      return
    }

    modalData.errors.email = true;
    this.snbar.openSnackBar("Veuillez entrer un e-mail valide", "Ok")
  }

  private saveNewPassWord(modalData, form, ref) {
    const code: UserModel = {
      token: form.controls.code.value,
      email: form.controls.email.value,
      password:form.controls.password.value
    }
    this.authService.postChangePassword(code).toPromise().then((result) => {
          console.log(result)
      this.snbar.openSnackBar(result.Message, "Ok")
    })
  }

  private deleteProduct(modalData: any) {
    console.log("I came from a product deletion modal");
  }
}