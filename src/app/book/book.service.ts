import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Book } from './book.model';

@Injectable()
export class BookService {
  bookscollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookDoc: AngularFirestoreDocument<Book>;

  constructor(public db: AngularFirestore) { 
    this.bookscollection = this.db.collection('books', x => x.orderBy('title', 'asc'));

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

  addBook(book) {
    //the service will need to deal with setting and updating all active/inative
    //on new and mayeb on updates to
    book.active = true;
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

  //need an update?
}
