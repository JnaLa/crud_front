import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private userAuthService: UserAuthService
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  showError: boolean = false;

  jwtToken: any;

  logIn() {

  }

}
