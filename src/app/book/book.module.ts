import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BookService } from './book.service';

import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [BookComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookModule { }
