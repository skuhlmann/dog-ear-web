import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    UserProfileComponent,
  ]
})
export class SharedModule { }
