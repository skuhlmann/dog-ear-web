import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Book>();

  model = { 
    title: '', 
    pageCount: '',
  };

  constructor(public db: BookService) { }

  ngOnInit() {
  }

  bookSubmit() {
    const newBook: Book = {
      title: this.model.title,
      pageCount: +this.model.pageCount,
    }
    
    this.onAdd.emit(newBook)
    this.model.title = '';
    this.model.pageCount = '';
  }
}
