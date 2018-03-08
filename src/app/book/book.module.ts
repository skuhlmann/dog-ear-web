import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { BookService } from './book.service';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [BookComponent, AddBookComponent, BookListComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookModule { }
