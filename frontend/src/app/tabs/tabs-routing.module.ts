import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UserViewComponent } from '../pages/user-view/user-view.component';
import { MapComponent } from '../pages/map/map.component';
import { VotingInfoComponent } from '../pages/voting-info/voting-info.component';
import { LoginComponent } from '../pages/login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'you',
        component: UserViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'map',
        component: MapComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'voting-info',
        component: VotingInfoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
