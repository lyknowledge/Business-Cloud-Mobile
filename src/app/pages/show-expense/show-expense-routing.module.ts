import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowExpensePage } from './show-expense.page';

const routes: Routes = [
  {
    path: '',
    component: ShowExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowExpensePageRoutingModule {}
