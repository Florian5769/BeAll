import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor() { }

  modalAction(modalData: any, form) {
    switch (modalData.name) {
      case "forgot-password":
        this.forgotPassword(modalData,form);
        break;

      default: alert("action doesnt exist")
        break;
    }
  }

  private forgotPassword(modalData,form) {
    if(!form.controls.email.errors){
      modalData.step += 1;
      modalData.confirmText = "Confirmer"
      return
    }

    modalData.errors.email = true;
  }

  private deleteProduct(modalData: any) {
    console.log("I came from a product deletion modal");
  }
}