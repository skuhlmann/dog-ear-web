import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from '../app-routing.module';

import { BookService } from './book.service';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

@NgModule({
  declarations: [
    BookComponent, 
    AddBookComponent, 
    BookListComponent, 
    AddBookmarkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookModule { }
