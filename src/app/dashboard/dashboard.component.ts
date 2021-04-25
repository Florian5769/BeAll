import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ModalComponent } from "../components/modal/modal.component";
import { DidYouKnewService } from "../api/providers/didYouKnew.service";
import { DidYouKnewModel } from "../api/models/didYouKnew.model";
import { DidYouKnewsModel } from "../api/models/didYouKnews.model";
import { SlideOversComponent } from '../components/slide-overs/slide-overs.component';
import { SnackBarService } from '../components/snackbar/snackbar';

import { DidYouKnewComponent } from "../components/modal/components/did-you-knew/did-you-knew.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})

export class DashboardComponent implements OnInit {
  datas: DidYouKnewsModel[] = [];

  constructor(
    public matDialog: MatDialog,
    private Dyk: DidYouKnewService,
    private snbar: SnackBarService) {}

  public showModal: boolean;

  ngOnInit(): void {
    this.getDidYouKnews();
  }

  getDidYouKnew = (id: string) => {
    this.Dyk.getDidYouKnew(id)
      .toPromise()
      .then((result: DidYouKnewModel) => {
        if (result) {
          let dialogConfig = new MatDialogConfig();
          dialogConfig.id = "slide-over";
          console.log(result)
          dialogConfig.data = {
            title: "Le saviez-vous ?",
            profilImage: result.userImage,
            roles: result.roles,
            firstname: result.firstname,
            lastname: result.lastname,
            email: result.email,
            username: result.username,
            dyk: result.dyk,
            template: "viewDyk",
          };
          let dialog = this.matDialog.open(SlideOversComponent, dialogConfig);
        }
      });
  }

  deleteDidYouKnew(id: string) {
    this.Dyk.deleteDidYouKnew(id)
      .toPromise()
      .then((result: DidYouKnewModel) => {
        if (result.deleted === true) {
          this.snbar.openSnackBar("L'article à bien été supprimé", 'OK');
          this.getDidYouKnews();
        } else {
          this.snbar.openSnackBar("Problème lors de la suppression", 'OK');
        }
      })
  }

  getDidYouKnews = () => {
    this.Dyk.getDidYouKnews()
      .toPromise()
      .then((result: DidYouKnewsModel[]) => {
        result.length > 0 ? (this.datas = result) : false;
      });
  };

  openModal = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.data = {
      name: "create-did-you-knew",
      title: "Créer son 'Le saviez-vous ?'",
      description: "Créer un le saviez-vous.",
      actionButtonText: "Delete",
      confirmText: "Confirmer",
      productId: "test",
      template: "createDyk",
      loading: false,
      errors: {
        content: false,
        sport: false,
      },
    };

    let dialog = this.matDialog.open(ModalComponent, dialogConfig);

    dialog.afterClosed().subscribe(() => {
      this.getDidYouKnews();
    });
  };

  hideModal() {
    this.showModal = false;
  }
}
