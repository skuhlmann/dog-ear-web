import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

import { BookmarkComponent } from './book/bookmark/bookmark.component';

const routes: Routes = [
  {
    path: 'bookmark',
    component: BookmarkComponent,
    data: {
      title: 'Bookmark'
    },
    canActivate: [AuthGuard]
  }
];

// using auth gaurd - probably inject and pass below
// const routes: Routes = [
//   ///...
//   { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
