import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-user-view',
  templateUrl: 'user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements AfterViewInit {
  user: any;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            //this.authService.setUser()
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.user.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  changeVotingLocation() {}

  getUsername() {
    this.user = this.authService.getCurrentUserValue();
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/app/login');
    });
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
