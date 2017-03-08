import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { FormControlComponent } from '../user/user-profile/dynamic-form/form-control.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    PostTableComponent
  ],
  declarations: [
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    PostTableComponent
  ]
})
export class SharedModule { }
