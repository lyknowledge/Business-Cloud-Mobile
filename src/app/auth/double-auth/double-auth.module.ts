import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoubleAuthPageRoutingModule } from './double-auth-routing.module';

import { DoubleAuthPage } from './double-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoubleAuthPageRoutingModule
  ],
  declarations: [DoubleAuthPage]
})
export class DoubleAuthPageModule {}
