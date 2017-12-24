import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserFormComponent, UserListComponent, UsersComponent} from '.';
import {CanDeactivateGuard} from '../guards/can-deactivate.guard';
import {UserResolveGuard} from './../guards/user-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: UserFormComponent
      },
      {
        path: 'edit/:id',
        component: UserFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          user: UserResolveGuard
        }

      },
      {
        path: '',
        component: UserListComponent
      },
    ]
  }
];

export let usersRouterComponents = [UsersComponent, UserListComponent, UserFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    UserResolveGuard
  ]
})
export class UsersRoutingModule {
}
