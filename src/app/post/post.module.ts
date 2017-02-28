import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { SharedModule } from '../shared/shared.module';
import { postRouting } from './post.routes';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';

@NgModule({
  imports: [
    CommonModule,
    postRouting,
    SharedModule,
    PaginationModule.forRoot()
  ],
  declarations: [PostlistComponent],
  exports: [],
  providers: [PostlistService]
})
export class PostModule { }
