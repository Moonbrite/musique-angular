import {style} from "@angular/animations";

export class Musique {
  constructor(id: number, title: string, auteur: string, urlYoutube: string, cover: string, style: string) {
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
  urlYoutube?:string;
  cover?:string;
  style?:string

}
