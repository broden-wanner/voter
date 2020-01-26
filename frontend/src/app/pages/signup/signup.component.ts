import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../models/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup: UserOptions = { username: '', password: '', location: '' };
  submitted = false;

  constructor(public router: Router, public userData: UserData) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/map?selectLocation=true');
    }
  }
}
