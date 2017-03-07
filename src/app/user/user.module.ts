import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserMainComponent } from './user-main/user-main.component';
import { userRouting } from './user.routes';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    userRouting
  ],
  declarations: [UserMainComponent]
})
export class UserModule { }
