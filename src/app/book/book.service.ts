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
  // user: Observable<User>;
  // user: any;

  constructor(public db: AngularFirestore, public auth: AuthService) { 
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

      // this.user = this.auth.currentUser.subscribe((user) => {
      //   return user;
      // });

      // this.user = this.auth.user.subscribe((user) => {
      //   console.log('user')
      //   console.log(user)
      //   return user;
      // });

      // this.auth.user.subscribe((user) => {
      //   this.books = this.getBooks(user.uid)
  
      //   this.books.subscribe((books) => {
      //     this.activeBook = this.setActiveBook(books)
      //   })
      // })
  }

  getBooks() {
    //scope to user
    return this.books;
  }

  addBook(book) {
    //the service will need to deal with setting and updating all active/inative
    //on new and mayeb on updates to

    //also scope to user
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
