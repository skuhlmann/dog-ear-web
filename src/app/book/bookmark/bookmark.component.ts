import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  books: Observable<any[]>;
  activeBook: any;

  constructor(public auth: AuthService, public db: AngularFirestore) { 
  }
  
  ngOnInit() {
    this.auth.user.subscribe((user) => {
      this.books = this.getBooks(user.uid)

      this.books.subscribe((books) => {
        this.activeBook = this.setActiveBook(books)
      })
    })

  }
  
  private getBooks(userId) {
    return this.db.collection('books', ref => ref.where('userId', '==', userId)).valueChanges();
  }

  private setActiveBook(books) {
    return books.find(book => book.active)
  }
}
