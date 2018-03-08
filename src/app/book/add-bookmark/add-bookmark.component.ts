import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Bookmark } from '../../models/bookmark';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnChanges {
  @Input() bookmark: Bookmark;
  @Output() onAddBookmark = new EventEmitter<Bookmark>();
  bookmarkForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  
  ngOnChanges() {
    const activeMark = this.bookmark || { page: ''}
    this.rebuildForm(activeMark)
  }

  createForm() {
    this.bookmarkForm = this.fb.group({
      page: ['', Validators.required ]
    });
  }

  rebuildForm(mark) {
    this.bookmarkForm.reset({
      page: mark.page
    })
  }

  submitBookmark() {
    const newBookmark: Bookmark = {
      page: this.bookmarkForm.get('page').value
    }

    this.onAddBookmark.emit(newBookmark);
  }
}
