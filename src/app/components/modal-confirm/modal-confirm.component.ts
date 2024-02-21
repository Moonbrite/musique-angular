import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {Musique} from "../../models/musique";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButton,
  ],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss'
})
export class ModalConfirmComponent {

  @Inject(MAT_DIALOG_DATA) public  data?: Musique;

  constructor(public dialogRef :MatDialogRef<any>) {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
