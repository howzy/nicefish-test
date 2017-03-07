import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserLoginComponent } from '../user/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    UserLoginComponent
  ],
  declarations: [
    UserLoginComponent
  ]
})
export class SharedModule { }
