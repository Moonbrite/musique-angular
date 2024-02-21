import {style} from "@angular/animations";
import {SafeUrl} from "@angular/platform-browser";

export class Musique {
  constructor(id?: number, title?: string, auteur?: string, urlYoutube?: string, cover?: string, style?: string) {
    this.id = id;
    this.title = title;
    this.auteur = auteur;
    this.urlYoutube = urlYoutube;
    this.cover = cover;
    this.style = style;
  }
  id?:number;
  title?:string;
  auteur?:string;
  urlYoutube?:string |SafeUrl;
  cover?:string;
  style?:string

}
