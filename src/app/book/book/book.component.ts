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
  activeMark: Bookmark;
  shownAction: string = "bookList";

  constructor(public db: BookService) {}

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
        this.activeMark = this.marks[0] || <Bookmark>{ page: 0 }
      }
    );
  }

  onSelect(book) {
    this.activeBook = book;
    this.fetchBookmarks();
    this.shownAction = "";
  }

  onUpdate(book) {
    this.db.updateBook(book)
  }

  onDelete(book) {
    this.db.deleteBook(book)
  }

  onAdd(book) {
    this.db.addBook(book);
    this.shownAction = "";
  }

  onAddBookmark(bookmark) {
    this.db.addBookmark(bookmark);
  }
}
