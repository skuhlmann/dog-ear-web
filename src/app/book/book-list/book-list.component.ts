import { Component, Input, Output, EventEmitter } from '@angular/core';

// import { BookService } from '../book.service';
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
  @Output() onUpdate = new EventEmitter<Book>();

  constructor() { }

  select(book: Book) {
    this.onSelect.emit(book)
  }

  update(book: Book) {
    this.onUpdate.emit(book)
  }

  delete(book: Book) {
    this.onDelete.emit(book)
  }
}
