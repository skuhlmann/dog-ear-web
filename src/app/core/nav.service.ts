import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  shownAction: string = "book";

  constructor() { }

  // activeAction() {
  //   return this.shownAction;
  // }

  activate(action) {
    this.shownAction = action;
  }
}
