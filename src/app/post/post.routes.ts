import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

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
    path: 'post/postdetail/:postId',
    component: PostDetailComponent
  }
];

export const postRouting = RouterModule.forChild(postRoutes);
