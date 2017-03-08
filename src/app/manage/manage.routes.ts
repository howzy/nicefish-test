import { RouterModule, Routes } from '@angular/router';

import { ManageMainComponent } from './manage-main/manage-main.component';

const manageRoutes: Routes = [
  {
    path: '',
    component: ManageMainComponent
  }
];

export const manageRouting = RouterModule.forChild(manageRoutes);
