import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowQuotePage } from './show-quote.page';

const routes: Routes = [
  {
    path: '',
    component: ShowQuotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowQuotePageRoutingModule {}
