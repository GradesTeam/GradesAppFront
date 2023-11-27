import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../enviroment/enviroment';
import { error } from 'console';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  username!: any;
  email!: any
  password!: any;
  repeatPassword!: any;
  date!: any;

  emailErr: string = "";
  usernameErr: string = "";
  passwordErr: string = "";
  repeatPasswordErr: string = "";

  constructor(private userService: UserService) { }



  createStudent() {

    this.userService.createStudent(this.username, this.date, this.email, this.password, this.repeatPassword).subscribe({
      next: data => {

      },

      error: err => {
        let errors = err.error.body.fields_errors;
        errors.forEach((erro: { field: any; message: any; }) => {
          switch (erro.field) {
            case "email":
              this.emailErr = erro.message;
              break;

            case "username":
              this.usernameErr = erro.message;
              break;

            case "password":
              this.passwordErr = erro.message;
              break;

            case "repeat_password":
              this.repeatPassword = erro.message;
              break;
          }

        });
      }
    });
  }



}
