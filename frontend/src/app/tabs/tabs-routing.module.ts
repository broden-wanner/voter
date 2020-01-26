import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UserViewComponent } from '../pages/user-view/user-view.component';
import { MapComponent } from '../pages/map/map.component';
import { VotingInfoComponent } from '../pages/voting-info/voting-info.component';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'you',
        component: UserViewComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'voting-info',
        component: VotingInfoComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/you',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
