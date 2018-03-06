import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  arr: Book[] = [];
  model = { title: '', pageCount: '' };

  constructor(public db: BookService) { }

  ngOnInit() {
    this.db.getBooks().subscribe(
      (book: Book[]) => {
        this.arr = book;
        console.log(this.arr);
      }
    );
  }

  bookSubmit() {
    this.db.addBook(this.model);
    this.model.title = '';
    this.model.pageCount = '';
  }

  onDelete(book) {
    this.db.deleteBook(book)
  }
}
