import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { VotingInfoComponent } from '../pages/voting-info/voting-info.component';
import { UserViewComponent } from '../pages/user-view/user-view.component';
import { MapComponent } from '../pages/map/map.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, TabsPageRoutingModule],
  declarations: [
    TabsPage,
    VotingInfoComponent,
    UserViewComponent,
    MapComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class TabsPageModule {}
