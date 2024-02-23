import {Component, OnInit} from '@angular/core';
import {MusiqueService} from "../../services/musique.service";
import {Musique} from "../../models/musique";
import {NgForOf, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Router, RouterLink} from "@angular/router";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {ModalConfirmComponent} from "../modal-confirm/modal-confirm.component";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    NgIf,
    MatProgressSpinnerModule,
    RouterLink,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ModalConfirmComponent
  ],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss'
})
export class MusicListComponent implements OnInit{

  constructor(private musicService:MusiqueService,private matDialog :MatDialog, private router:Router, private userService:UserService) {
  }

  musiques?: Musique[];

  isLoading = false;

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    this.isLoading = true;
    this.musicService.getAll().subscribe(data => {
      this.musiques = data;
      this.isLoading = false
    })
  }

  deleteMusicModal(enterAnimationDuration: string, exitAnimationDuration: string, id: number | undefined) {
   let dialog = this.matDialog.open(ModalConfirmComponent,{
      width:'250px',
      enterAnimationDuration,
      exitAnimationDuration
      });
    dialog.afterClosed().subscribe(result =>{
      if (result ) {
          this.isLoading = true;
          this.musicService.delete(<number>id).subscribe(data =>{
          this.ngOnInit();
        })
      }
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login'])
    this.userService.isLogout()
  }
}
