import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor() { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case "forgot-password":
        this.forgotPassword();
        break;

      default: alert("action doesnt exist")
        break;
    }
  }

  private forgotPassword() {
    console.log("forgot instruction");
  }

  private deleteProduct(modalData: any) {
    console.log("I came from a product deletion modal");
  }
}