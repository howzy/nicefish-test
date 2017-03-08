import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMainComponent } from './manage-main/manage-main.component';

import { manageRouting } from './manage.routes';

@NgModule({
  imports: [
    CommonModule,
    manageRouting
  ],
  declarations: [ManageMainComponent]
})
export class ManageModule { }
