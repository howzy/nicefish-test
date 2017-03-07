import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainComponent } from './user-main/user-main.component';
import { userRouting } from './user.routes';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [UserMainComponent, UserInfoComponent]
})
export class UserModule { }
