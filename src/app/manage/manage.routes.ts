import { RouterModule, Routes } from '@angular/router';

import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { AuthGuard } from '../user/user-login/services/auth-guard';
import { CommentTableComponent } from './comment-table/comment-table.component';

const manageRoutes: Routes = [
  {
    path: '',
    component: ManageMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posttable/page/1',
        pathMatch: 'full'
      },
      {
        path: 'posttable/page/:page',
        component: PostTableComponent
      },
      {
        path: 'commenttable/page/:page',
        component: CommentTableComponent
      }
    ]
  }
];

export const manageRouting = RouterModule.forChild(manageRoutes);
