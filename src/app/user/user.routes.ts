import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../user/user-login/services/auth-guard';

const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
