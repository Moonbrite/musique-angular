import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MusiqueService} from "../../services/musique.service";
import {Musique} from "../../models/musique";
import {NgIf, TitleCasePipe} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-musique-detail',
  standalone: true,
  imports: [
    NgIf,
    TitleCasePipe,
    MatProgressSpinner
  ],
  templateUrl: './musique-detail.component.html',
  styleUrl: './musique-detail.component.scss'
})
export class MusiqueDetailComponent implements OnInit{

  constructor(private activatedRoute :ActivatedRoute,private musiqueService :MusiqueService,private sanitizer: DomSanitizer) {
  }

  musique?: Musique;
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
      this.musiqueService.getOne(id).subscribe(data => {

        this.musique = data;
        this.musique.urlYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(<string>this.musique?.urlYoutube)
        this.isLoading = false;
      })
  }

}
