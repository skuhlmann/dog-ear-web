import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  model = { 
    title: '', 
    pageCount: '',
  };

  constructor(public db: BookService) { }

  ngOnInit() {
  }

  bookSubmit() {
    this.db.addBook(this.model);
    this.model.title = '';
    this.model.pageCount = '';
  }
}
