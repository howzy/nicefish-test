import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { FormControlComponent } from '../user/user-profile/dynamic-form/form-control.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';
import { PostTableService } from '../manage/post-table/services/post-table.service';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    FormsModule,
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    PostTableComponent,
    CommentTableComponent,
    PaginationModule,
    ModalModule
  ],
  declarations: [
    UserLoginComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    PostTableComponent,
    CommentTableComponent
  ],
  providers: [PostTableService]
})
export class SharedModule { }
