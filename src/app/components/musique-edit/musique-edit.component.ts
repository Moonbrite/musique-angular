import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MusiqueService} from "../../services/musique.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Musique} from "../../models/musique";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-musique-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './musique-edit.component.html',
  styleUrl: './musique-edit.component.scss'
})
export class MusiqueEditComponent implements OnInit{

  musique?: Musique;

  constructor(private activatedRoute :ActivatedRoute,private musiqueService :MusiqueService,private sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
    this.musiqueService.getOne(id).subscribe(data => {
      this.musique = data;
    })
  }

  submitForm(musique:Musique) {
    this.musiqueService.editMusique(musique,musique.id).subscribe(
      data => {
        return this.router.navigate([''])
      }
    )
  }

}
