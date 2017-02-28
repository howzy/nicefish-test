import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'posts',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule'
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);
