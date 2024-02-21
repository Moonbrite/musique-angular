import { Routes } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {MusiqueDetailComponent} from "./components/musique-detail/musique-detail.component";
import {AddMusiqueComponent} from "./components/add-musique/add-musique.component";

export const routes: Routes = [
  {path :'', component:MusicListComponent },
  {path :'ajout', component:AddMusiqueComponent },
  {path :':id', component:MusiqueDetailComponent }
];
