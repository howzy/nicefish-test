import { RouterModule, Routes } from '@angular/router';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';

const manageRoutes: Routes = [
  {
    path: '',
    component: ManageMainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posttable/page/1',
        pathMatch: 'full'
      },
      {
        path: 'posttable/page/:page',
        component: PostTableComponent
      }
    ]
  }
];

export const manageRouting = RouterModule.forChild(manageRoutes);
