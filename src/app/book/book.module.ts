import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BookService } from './book.service';

import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [BookService],
  exports: [BookComponent]
})
export class BookModule { }
