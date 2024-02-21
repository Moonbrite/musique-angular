import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Musique} from "../models/musique";
import {environemt} from "../../environements/environemt";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {


  apiUrl: string = environemt.apiUrl+"musiques"

  constructor(private httpClient:HttpClient) {

  }

  getOne(id: number):Observable<Musique>{
    return this.httpClient.get<Musique>(this.apiUrl + "/" + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  getAll():Observable<Musique[]>{
    return this.httpClient.get<Musique[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: any){
    let errorMessage = "";
      if(error.error instanceof ErrorEvent){
        errorMessage =error.error.message;
    }else {
        errorMessage = `Error Code ${error.status}\nMessage : ${error.message}`
      }
      window.alert(errorMessage)
    return throwError(errorMessage)
  }

  delete(id: number):Observable<Musique>{
  return this.httpClient.delete(this.apiUrl + "/"+ id).pipe(
    retry(1),
    catchError(this.errorHandler)
  )
  }

  postMusique(musique:Musique):Observable<Musique>{
    return  this.httpClient.post<Musique>(this.apiUrl,musique).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }


}
