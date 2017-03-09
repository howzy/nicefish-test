import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';
import { AuthGuard } from '../user/user-login/services/auth-guard';

const userRoutes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posttable/page/1',
        component: PostTableComponent
      },
      {
        path: 'posttable/page/:page',
        component: PostTableComponent
      },
      {
        path: 'commenttable/page/:page',
        component: CommentTableComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: '**',
        redirectTo: 'posttable/page/1'
      }
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);
