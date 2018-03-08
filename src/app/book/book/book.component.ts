import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../../models/book';
import { Page } from '../../models/page';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  activeBook: Book;
  pages: Page[] = [];

  constructor(public db: BookService) { }

  ngOnInit() {
    this.db.getBooks().subscribe(
      (book: Book[]) => {
        this.books = book;
        console.log(book)

        this.activeBook = this.books[0];

        this.db.getPages(this.activeBook).subscribe(
          (page: Page[]) => {

            console.log(page)
            this.pages = page;
          }
        );

      }
    );
  }

  onSelect(book) {
    this.activeBook = book;

    this.db.getPages(this.activeBook).subscribe(
      (page: Page[]) => {

        console.log(page)
        this.pages = page;
      }
    );
  }

  onUpdate(book) {
    this.db.updateBook(book)
  }

  onDelete(book) {
    this.db.deleteBook(book)
  }

  onAddPage() {
    this.db.addPage( {
      page: 30
    });
  }
}
