import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    data: {
      title: 'User Profile'
    }
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
