import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() onSelect = new EventEmitter<Book>();
  @Output() onDelete = new EventEmitter<Book>();

  constructor() { }

  select(book: Book) {
    this.onSelect.emit(book)
  }

  delete(book: Book) {
    this.onDelete.emit(book)
  }
}
