import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {User} from "../../models/user";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "../../services/user.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user:User = new User();

  constructor( private serviceUser: UserService,private router:Router) {
  }

  error?: string;

  addUser() {
  this.serviceUser.registerUser(this.user).subscribe( data => {
      this.router.navigate(['/login']);
    },error => {
      this.error = error.type
  })
  }
}
