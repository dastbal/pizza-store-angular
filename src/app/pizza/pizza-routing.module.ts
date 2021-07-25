import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';

const routes: Routes = [
  {
    path: '',
    component:  PizzasComponent
  },
  {
    path: ':id',
    component:  PizzaDetailComponent
  },
]
@NgModule({
  imports:[
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule
  ],
})

export class PizzaRoutingModule {}
