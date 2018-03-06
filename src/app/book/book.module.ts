import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BookmarkComponent } from './bookmark/bookmark.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [BookmarkComponent, NewBookComponent, BookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BookmarkComponent]
})
export class BookModule { }
