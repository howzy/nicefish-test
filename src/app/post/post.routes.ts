import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';

export const postRoutes: Routes = [
  {
    path: '',
    redirectTo: 'page/1',
    pathMatch: 'full'
  },
  {
    path: 'page/:page',
    component: PostlistComponent
  }
];

export const postRouting = RouterModule.forChild(postRoutes);
