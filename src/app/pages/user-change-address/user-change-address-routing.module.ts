import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChangeAddressPage } from './user-change-address.page';

const routes: Routes = [
  {
    path: '',
    component: UserChangeAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChangeAddressPageRoutingModule {}
