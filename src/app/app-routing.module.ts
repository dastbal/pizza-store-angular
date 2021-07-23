import { NgModule } from '@angular/core';
import { RouterModule, Routes , PreloadAllModules } from '@angular/router';
import { PizzasComponent} from './pizzas/pizzas.component';
import { ContactComponent} from './contact/contact.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { PizzaDetailComponent} from './pizza-detail/pizza-detail.component';
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
        canActivate: [AdminGuard],
        component:  ContactComponent
      },
      {
        path: 'pizza',
        component:  PizzasComponent
      },
      {
        path: 'pizza/:id',
        component:  PizzaDetailComponent
      },

    ]
  },
  {
    path: '**',// no hubo match
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
