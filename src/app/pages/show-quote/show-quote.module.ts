import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowQuotePageRoutingModule } from './show-quote-routing.module';

import { ShowQuotePage } from './show-quote.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowQuotePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ShowQuotePage]
})
export class ShowQuotePageModule { }
