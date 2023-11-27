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

  form: any = {
    username: null,
    email: null,
    password: null,
    repeatPassword: null,
    date: null
  };

  errorMessage!: String;

  constructor(private userService: UserService) { }



  createStudent() {

    this.userService.createStudent(this.form.username, this.form.date, this.form.email, this.form.password, this.form.repeatPassword).subscribe({
      next: data => {

      },

      error: err => {
        console.log(err.error.body.fields_errors);
      }
    });
  }

}
