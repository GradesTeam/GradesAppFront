import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { environment } from '../../enviroment/enviroment';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username!: any;
  password!: any;
  errorMessage: string = ""

  constructor(private userService: UserService, private tokenService: TokenStorageService) { }

  login() {
    this.userService.login(this.username, this.password).subscribe({
      next: data => {
        //this.tokenStorage.saveToken(data.accessToken);
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);
        sessionStorage.setItem('user', data);
        window.location.href = `${environment.localHost}teacher`;
      },
      error: err => {
        this.errorMessage = "Las credenciales son inválidas";
      }
    });
  }

}
