import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChangePasswordPage } from './user-change-password.page';

const routes: Routes = [
  {
    path: '',
    component: UserChangePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChangePasswordPageRoutingModule {}
