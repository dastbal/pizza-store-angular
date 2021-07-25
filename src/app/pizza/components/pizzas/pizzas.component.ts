import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../../../core/services/pizzas/pizzas.service';
import {Pizza} from '../../../pizza.model';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas : Pizza[] =[];
  clickPizza(id:number){
    console.log('pizza',id);
  }
  constructor(
    private pizzasService : PizzasService
  ) { }

  ngOnInit(): void {
    this.fetchPizzas();
  }
  fetchPizzas(){
    this.pizzasService.getAllPizzas()
    .subscribe(pizzas=>{
      console.log(pizzas)
      this.pizzas = pizzas;
    });
  }

}
