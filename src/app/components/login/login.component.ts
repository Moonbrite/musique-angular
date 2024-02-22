import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatButton,
        MatInput,
        FormsModule,
        MatError,
        MatLabel,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private userService :UserService) {
  }

  users?:User [];


  connectUser() {
    console.log(this.userService.getAll().subscribe(
      data=>{
        this.users = data
        console.log(this.users)
      }
    ))
  }
}
