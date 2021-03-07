import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserExpensesPage } from './user-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: UserExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserExpensesPageRoutingModule {}
