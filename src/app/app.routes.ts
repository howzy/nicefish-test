import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

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
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  }
];

export const appRouting = RouterModule.forRoot(appRoutes);
