import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Musique} from "../../models/musique";
import {NgIf} from "@angular/common";
import {MusiqueService} from "../../services/musique.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-add-musique',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule
  ],
  templateUrl: './add-musique.component.html',
  styleUrl: './add-musique.component.scss'
})
export class AddMusiqueComponent {

  durationInSeconds = 5;

  constructor(private musiqueService:MusiqueService, private router:Router,private _snackBar: MatSnackBar) {
  }

  musique :Musique = new Musique();
  submitForm(musique:Musique) {
    this.musiqueService.postMusique(musique).subscribe(
      data => {
        this._snackBar.open("Music added","close")
        return this.router.navigate([''])
      }
    )
  }

}
