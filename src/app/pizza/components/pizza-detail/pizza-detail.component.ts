import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // para enviarle el id dinamicamente a la ruta
import { PizzasService} from '../../../core/services/pizzas/pizzas.service'
import {Pizza} from '../../../pizza.model';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  pizza: Pizza | any;
  constructor(
    private route:ActivatedRoute,
  private pizzasService:PizzasService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id: string= params.id
      this.pizza = this.pizzasService.getPizza(id);
      this.fetchPizza(id);
    });

  }

  fetchPizza( id:string){
    this.pizzasService.getPizza(id)
    .subscribe(pizza=>{
      console.log(pizza);
      this.pizza =pizza;
    });

  }

  updatePizza(){
    const updatePizza :Partial<Pizza>={
      title:'nuevo de angular',
      image:'assets/images/pizza.jpg',
      price: 2000,
      description:'updating the description'
    };
    this.pizzasService.updatePizza('1',updatePizza)
    .subscribe(pizza =>{
      console.log(pizza)
    })
  }
  createPizza(){
    const newPizza :Pizza={
      id:'5',
      title:'nuevo de angular',
      image:'assets/images/pizza.jpg',
      price: 3000,
      description:'nuevo'
    };
    this.pizzasService.createPizza(newPizza)
    .subscribe(pizza =>{
      console.log(pizza)
    })
  }
  deletePizza(){
    this.pizzasService.deletePizza('222')
    .subscribe(pizza =>{
      console.log(pizza)
    })
  }

}
