import { Injectable } from "@angular/core";
import { UserModel } from "src/app/api/models";
import { LoginResponseModel } from "src/app/api/models/login-response.model";
import { AuthService } from "src/app/api/providers/auth.service";
import { DidYouKnewService } from "src/app/api/providers/didYouKnew.service";
import { SnackBarService } from "src/app/components/snackbar/snackbar";

@Injectable({
  providedIn: "root",
})
export class ModalActionsService {
  constructor(
    private snbar: SnackBarService,
    private authService: AuthService,
    private DykService: DidYouKnewService
  ) {}

  //modalData, formData, ref for close the modal
  modalAction(modalData: any, form, ref) {
    switch (modalData.name) {
      case "generate-code":
        this.generateCode(modalData, form);
        break;

      case "save-new-password":
        this.saveNewPassWord(modalData, form, ref);
        break;

      case "create-did-you-knew":
        this.createDidYouKnew(modalData, form, ref);
        break;

      default:
        alert("action doesnt exist");
        break;
    }
  }

  private createDidYouKnew(modalData, form, ref) {
    if (!form.controls.sport.errors && !form.controls.content.errors) {
      let newDykArticle = {
        sport: form.controls.sport.value,
        content: form.controls.content.value
      }
      modalData.loading = true;
      this.DykService.postNewYouKnewArticle(newDykArticle)
        .toPromise()
        .then((result) => {
          modalData.loading = false;
          //snackBar Add Complete
          ref.close()
        });
    } else {
      form.controls.sport.errors
        ? (modalData.errors.sport = true)
        : (modalData.errors.sport = false);
      form.controls.content.errors
        ? (modalData.errors.content = true)
        : (modalData.errors.content = false);
    }
  }

  private generateCode(modalData, form) {
    if (!form.controls.email.errors) {
      modalData.loading = true;
      const email: UserModel = {
        email: form.controls.email.value,
      };

      this.authService
        .postGenerateCode(email)
        .toPromise()
        .then((result: LoginResponseModel) => {
          if (result.Status != 404) {
            modalData.step += 1;
            modalData.confirmText = "Confirmer";
            modalData.name = "save-new-password";
          } else {
            modalData.errors.email = true;
          }

          this.snbar.openSnackBar(result.Message, "Ok");
          modalData.loading = false;
        });
      return;
    }

    modalData.errors.email = true;
    this.snbar.openSnackBar("Veuillez entrer un e-mail valide", "Ok");
  }

  private saveNewPassWord(modalData, form, ref) {
    let errors = false;

    if (form.controls.code.errors) {
      modalData.errors.token = true;
      errors = true;
    }

    if (form.controls.password.errors) {
      modalData.errors.password = true;
      errors = true;
    }

    if (form.controls.confirmPassword.errors) {
      modalData.errors.confirmPassword = true;
      errors = true;
    }

    if (!errors) {
      modalData.loading = true;
      const code: UserModel = {
        token: form.controls.code.value,
        email: form.controls.email.value,
        password: form.controls.password.value,
      };
      this.authService
        .postChangePassword(code)
        .toPromise()
        .then((result) => {
          if (result.Message) {
            modalData.loading = false;
            ref.close();
            this.snbar.openSnackBar(result.Message, "Ok");
          }
        });

      return;
    }
  }

  private deleteProduct(modalData: any) {
    console.log("I came from a product deletion modal");
  }
}
