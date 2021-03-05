import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'conversations',
        loadChildren: () => import('./../pages/conversations/conversations.module').then(m => m.ConversationsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'user-info',
        loadChildren: () => import('./../pages/user-info/user-info.module').then(m => m.UserInfoPageModule)
      },
      {
        path: 'user-avatar',
        loadChildren: () => import('./../pages/user-avatar/user-avatar.module').then(m => m.UserAvatarPageModule)
      },
      {
        path: 'user-change-password',
        loadChildren: () => import('./../pages/user-change-password/user-change-password.module').then(m => m.UserChangePasswordPageModule)
      },
      {
        path: 'user-change-address',
        loadChildren: () => import('./../pages/user-change-address/user-change-address.module').then(m => m.UserChangeAddressPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./../pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab3',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
