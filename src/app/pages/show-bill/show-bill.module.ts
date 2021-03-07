import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBillPageRoutingModule } from './show-bill-routing.module';

import { ShowBillPage } from './show-bill.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBillPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ShowBillPage]
})
export class ShowBillPageModule { }
