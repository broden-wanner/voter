import { Component, OnInit } from '@angular/core';
import { UserOptions } from 'src/app/models/user-options';
import { Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public authService: AuthService, public router: Router) {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.login(this.login).subscribe(
        () => this.router.navigateByUrl('/app/you'),
        err => console.error(err)
      );
    }
  }

  onSignup() {
    this.router.navigateByUrl('/app/signup');
  }
}
