import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent
  ],
  declarations: [
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent
  ]
})
export class SharedModule { }
