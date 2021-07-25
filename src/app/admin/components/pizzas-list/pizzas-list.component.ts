import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../../../core/services/pizzas/pizzas.service';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent implements OnInit {
  pizzas = [];
  displayedColumns: string[] =['id','title','price','action']

  constructor(
    private pizzasService: PizzasService
  ) { }

  ngOnInit(): void {
    this.fetchPizzas();
  }

  fetchPizzas(){
    this.pizzasService.getAllPizzas()
    .subscribe(pizzas=> {
        this.pizzas = pizzas

      });
  }

  deletePizza(id:string){
    this.pizzasService.deletePizza(id)
    .subscribe(pizza=>{
      console.log(pizza)
      this.pizzas = this.pizzas.filter(pizza => pizza.id != id);
        })
  }


}
