import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PizzasService} from './services/pizzas/pizzas.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PizzasService
  ]
})
export class CoreModule { }
