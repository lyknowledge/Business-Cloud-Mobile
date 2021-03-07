import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAvatarPageRoutingModule } from './user-avatar-routing.module';

import { UserAvatarPage } from './user-avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAvatarPageRoutingModule
  ],
  declarations: [UserAvatarPage]
})
export class UserAvatarPageModule {}
