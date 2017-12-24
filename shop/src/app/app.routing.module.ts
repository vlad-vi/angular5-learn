import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent, LoginComponent, PublicCartComponent, PageNotFoundComponent} from './components';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: {
      title: 'Admin',
      preload: false
    }
  },
  {
    path: 'cart',
    loadChildren: 'app/users/cart.module#CartModule',
    data: {
      preload: true,
      title: 'Cart'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'public-cart',
    component: PublicCartComponent,
    outlet: 'popup'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent,
    data: {title: 'Page Not Found'}
  }
];

export let appRouterComponents = [AboutComponent, PageNotFoundComponent, LoginComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
