import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoubleAuthPage } from './double-auth.page';

const routes: Routes = [
  {
    path: '',
    component: DoubleAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoubleAuthPageRoutingModule {}
