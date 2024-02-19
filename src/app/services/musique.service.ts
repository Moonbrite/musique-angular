import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Musique} from "../models/musique";
import {environemt} from "../../environements/environemt";

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {


  apiUrl = environemt.apiUrl+"musiques"

  constructor(private httpClient:HttpClient) { }

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


}
