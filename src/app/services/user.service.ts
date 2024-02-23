import { Injectable } from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Musique} from "../models/musique";
import {User} from "../models/user";
import {environemt} from "../../environements/environemt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
  }

  apiUrl: string = environemt.apiUrl+"users"

  apiUrlAuth: string = environemt.apiAuth


  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }


  errorHandler(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(error)
    }else {
      console.log(error)
    }
    return throwError( () => new ErrorEvent(error.error["hydra:description"]))
  }


  loginUser(user:User):Observable<User>{
    return  this.httpClient.post<User>(this.apiUrlAuth,user).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  registerUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl,user).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }


}
