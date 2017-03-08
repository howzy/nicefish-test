import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageMainComponent } from './manage-main/manage-main.component';

import { manageRouting } from './manage.routes';
import { PostTableComponent } from './post-table/post-table.component';

@NgModule({
  imports: [
    CommonModule,
    manageRouting
  ],
  declarations: [ManageMainComponent, PostTableComponent]
})
export class ManageModule { }
