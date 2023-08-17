import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(

    private userAuthService: UserAuthService
  ) { }

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {

  }

  registerUser() {

  }
}
