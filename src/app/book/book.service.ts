import { Injectable } from '@angular/core';
import * as fb from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';

import { User } from '../models/user';
import { Book } from '../models/book';
import { Bookmark } from '../models/bookmark';

@Injectable()
export class BookService {
  bookscollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookDoc: AngularFirestoreDocument<Book>;
  markscollection: AngularFirestoreCollection<Bookmark>;
  marks: Observable<Bookmark[]>;
  currentUser: User;

  constructor(public db: AngularFirestore, public auth: AuthService ) { 
    this.bookscollection = this.db.collection('books', x => x.where('userId', '==', auth.currentUser.uid));

    this.books = this.bookscollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Book;
            data.id = a.payload.doc.id;
            return data;
          });
      });
  }
     
  getBooks() {
    return this.books;
  }

  getBookmarks(book: Book) {
    this.bookDoc = this.db.doc(`books/${book.id}`);
    this.markscollection = this.bookDoc.collection('bookmarks', x => x.orderBy('date', 'desc'));

    return this.marks = this.markscollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Bookmark;
            data.id = a.payload.doc.id;
            return data;
          });
      });

  }
  
  addBook(book) {
    book.userId = this.auth.currentUser.uid;
    this.bookscollection.add(book);
  }
  
  deleteBook(book) {
    this.bookDoc = this.db.doc(`books/${book.id}`);
    this.bookDoc.delete();
  }

  updateBook(book) {
    this.bookDoc = this.db.doc(`books/${book.id}`);
    this.bookDoc.update(book);
  }

  addBookmark(bookmark: Bookmark) {
    bookmark.date = fb.firestore.FieldValue.serverTimestamp()
    this.markscollection.add(bookmark);
  }
}
