import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../../models/book';
import { Bookmark } from '../../models/bookmark';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  activeBook: Book;
  marks: Bookmark[] = [];
  // latestMark: Bookmark;

  constructor(public db: BookService) { }

  ngOnInit() {
    this.db.getBooks().subscribe(
      (book: Book[]) => {
        this.books = book;
        this.activeBook = this.books[0];
        this.fetchBookmarks();
      }
    );
  }
  
  fetchBookmarks() {
    this.db.getBookmarks(this.activeBook).subscribe(
      (mark: Bookmark[]) => {
        this.marks = mark;
      }
    );
  }

  onSelect(book) {
    this.activeBook = book;
    this.fetchBookmarks();
  }

  onUpdate(book) {
    this.db.updateBook(book)
  }

  onDelete(book) {
    this.db.deleteBook(book)
  }

  onAddBookmark(bookmark) {
    this.db.addBookmark(bookmark);
  }
}
