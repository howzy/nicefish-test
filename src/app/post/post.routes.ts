import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';

export const postRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: PostlistComponent
  },
  {
    path: 'postdetail/:postId',
    component: PostDetailMainComponent
  }
];

export const postRouting = RouterModule.forChild(postRoutes);
