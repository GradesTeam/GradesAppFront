import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../enviroment/enviroment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!: any;
  password!: any;
  errorMessage: string = ""

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.username, this.password).subscribe({
      next: data => {
        //this.tokenStorage.saveToken(data.accessToken);
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', data);
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('rol', data.rol);
        window.location.href = `${environment.localHost}subjects`
      },
      error: err => {
        this.errorMessage = "Las credenciales son inválidas";
      }
    });
  }

}
