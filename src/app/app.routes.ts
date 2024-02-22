import { Routes } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {MusiqueDetailComponent} from "./components/musique-detail/musique-detail.component";
import {AddMusiqueComponent} from "./components/add-musique/add-musique.component";
import {MusiqueEditComponent} from "./components/musique-edit/musique-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

export const routes: Routes = [
  {path :'', component:MusicListComponent },
  {path :'ajout', component:AddMusiqueComponent },
  {path :'login', component:LoginComponent },
  {path :'register', component:RegisterComponent },
  {path :'edit/:id', component:MusiqueEditComponent },
  {path :':id', component:MusiqueDetailComponent }
];
