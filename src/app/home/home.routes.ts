import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      loadChildren: '../post/post.module#PostModule',
    }]
  }
];

export const homeRouting = RouterModule.forChild(homeRoutes);
