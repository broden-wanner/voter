import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../models/user-options';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup: UserOptions = { username: '', password: '', role: false, leaveTime: '' };
  submitted = false;

  constructor(public router: Router, public userData: UserData, private authService: AuthService) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.register(this.signup).subscribe(
        () => this.router.navigateByUrl('/app/map?selectLocation=true'),
        err => {
          console.error('Error in registering:', err);
        }
      );
    }
  }
}
