import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../core/auth.service';

import { Book } from '../models/book';
import { User } from '../models/user';

@Injectable()
export class BookService {
  bookscollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;
  bookDoc: AngularFirestoreDocument<Book>;
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
  
  addBook(book) {
    //the service will need to deal with setting and updating all active/inative
    //on new and maybe on updates too
    //then can be used when page counts are added

    book.active = true;
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
}
