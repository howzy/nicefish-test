import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainComponent } from './user-main/user-main.component';
import { userRouting } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [UserMainComponent]
})
export class UserModule { }
