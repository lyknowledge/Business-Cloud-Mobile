import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChangeAddressPageRoutingModule } from './user-change-address-routing.module';

import { UserChangeAddressPage } from './user-change-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserChangeAddressPageRoutingModule
  ],
  declarations: [UserChangeAddressPage]
})
export class UserChangeAddressPageModule {}
