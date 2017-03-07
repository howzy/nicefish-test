import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from './user-main/user-main.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponent,
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
