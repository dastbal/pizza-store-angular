import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LayoutComponent} from './layout/layout.component';
import { AdminGuard} from './admin.guard';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:[
      {path: '',
      redirectTo: '/home',
      pathMatch: 'full',},
      {
        path: 'home',
        loadChildren: ( ) => import('./home/home.module').then(m=> m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: ( ) => import('./contact/contact.module').then(m=> m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: ( ) => import('./order/order.module').then(m=> m.OrderModule)
      },
      {
        path: 'pizza',
        loadChildren: ( ) => import('./pizza/pizza.module').then(m=> m.PizzaModule)

      },
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: ( ) => import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',// no hubo match
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
