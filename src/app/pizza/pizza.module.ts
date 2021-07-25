import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';

import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';

import { PizzaRoutingModule } from './pizza-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations:[
    PizzaComponent,
    PizzasComponent,
    PizzaDetailComponent,
  ],
  imports:[
    CommonModule,
    PizzaRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PizzaModule {

}
