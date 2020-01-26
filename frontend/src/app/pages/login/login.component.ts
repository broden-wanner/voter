import { Component, OnInit } from '@angular/core';
import { UserOptions } from 'src/app/models/user-options';
import { Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public userData: UserData, public router: Router) {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/you');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/app/signup');
  }
}
