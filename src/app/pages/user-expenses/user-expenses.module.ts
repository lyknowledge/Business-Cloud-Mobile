import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserExpensesPageRoutingModule } from './user-expenses-routing.module';

import { UserExpensesPage } from './user-expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserExpensesPageRoutingModule
  ],
  declarations: [UserExpensesPage]
})
export class UserExpensesPageModule {}
