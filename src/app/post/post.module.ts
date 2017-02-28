import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { SharedModule } from '../shared/shared.module';
import { postRouting } from './post.routes';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistService } from './postlist/services/postlist.service';
import { BooleanPipe } from '../utils/boolean.pipe';

@NgModule({
  imports: [
    CommonModule,
    postRouting,
    SharedModule,
    PaginationModule.forRoot(),
  ],
  declarations: [PostlistComponent, BooleanPipe],
  exports: [],
  providers: [PostlistService]
})
export class PostModule { }
