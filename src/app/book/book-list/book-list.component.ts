import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //this one will just get a list of books, display them and delegate delete to book component
  constructor() { }

  ngOnInit() {
  }

}
