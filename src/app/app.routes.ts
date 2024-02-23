import { Routes } from '@angular/router';
import {MusicListComponent} from "./components/music-list/music-list.component";
import {MusiqueDetailComponent} from "./components/musique-detail/musique-detail.component";
import {AddMusiqueComponent} from "./components/add-musique/add-musique.component";
import {MusiqueEditComponent} from "./components/musique-edit/musique-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path :'', component:MusicListComponent ,canActivate: [authGuard],},
  {path :'ajout', component:AddMusiqueComponent,canActivate: [authGuard] },
  {path :'login', component:LoginComponent },
  {path :'register', component:RegisterComponent },
  {path :'edit/:id', component:MusiqueEditComponent,canActivate: [authGuard] },
  {path :':id', component:MusiqueDetailComponent ,canActivate: [authGuard]}
];
