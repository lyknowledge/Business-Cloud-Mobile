import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChangePasswordPageRoutingModule } from './user-change-password-routing.module';

import { UserChangePasswordPage } from './user-change-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChangePasswordPageRoutingModule
  ],
  declarations: [UserChangePasswordPage]
})
export class UserChangePasswordPageModule {}
