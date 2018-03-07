import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  activeBook: Book;

  constructor(public db: BookService) { }

  ngOnInit() {
    this.db.getBooks().subscribe(
      (book: Book[]) => {
        this.books = book;

        this.activeBook = this.books[0];
      }
    );
  }

  onSelect(book) {
    this.activeBook = book;
  }

  onUpdate(book) {
    this.db.updateBook(book)
  }

  onDelete(book) {
    this.db.deleteBook(book)
  }
}
