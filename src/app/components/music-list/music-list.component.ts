import {Component, OnInit} from '@angular/core';
import {MusiqueService} from "../../services/musique.service";
import {Musique} from "../../models/musique";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    NgIf,
    MatProgressSpinnerModule
  ],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit{

  constructor(private musicService:MusiqueService) {
  }

  musiques?: Musique[];

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.musicService.getAll().subscribe(data => {
      this.musiques = data;
      this.isLoading = false
    })
  }




}
