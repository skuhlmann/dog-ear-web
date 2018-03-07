import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BookComponent]
})
export class BookModule { }
