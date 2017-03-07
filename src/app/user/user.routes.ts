import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
